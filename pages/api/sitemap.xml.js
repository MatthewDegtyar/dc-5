export const runtime = "edge"; // Set the runtime to "edge" for Response object compatibility

// Environment variables for base URLs
const baseUrl = "http://54.224.177.93:8000"; // Backend API URL
const siteUrl = process.env.NEXT_PUBLIC_ENV
  ? "http://localhost:3000"
  : "https://www.degtyarconsulting.com";

// Main function to generate the sitemap
export default async function handler(req, res) {
  try {
    // Define the maximum number of URLs to fetch from the backend
    const TOTAL_URLS_TO_FETCH = 5000;

    // Fetch dynamic blog post URLs from the backend
    const fetchDynamicUrls = async () => {
      const res = await fetch(
        `${baseUrl}/blogposts/by-project/6?limit=${TOTAL_URLS_TO_FETCH}&offset=0`
      );
      const data = await res.json();
      return data.data || []; // Return the data array or an empty array if no data
    };

    const dynamicUrls = await fetchDynamicUrls();

    // Prepare static routes
    const staticRoutes = [
      {
        loc: `${siteUrl}/`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "yearly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/e-commerce`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/gogole-ads`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/seo`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/social-media`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/static-sites`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/white-label`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/wordpress-cms`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/contact`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "yearly",
        priority: 0.9,
      },
      {
        loc: `${siteUrl}/news/`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "weekly",
        priority: 0.7,
      },
    ];

    // Combine dynamic and static routes
    const allUrls = [
      ...dynamicUrls.map((post) => ({
        loc: `${siteUrl}/blog/${post.slug}/`,
        lastmod: new Date(post.last_modified_at).toISOString().split("T")[0], // Format last modified date
        changefreq: "daily",
        priority: 0.8,
      })),
      ...staticRoutes,
    ];

    // Build the sitemap XML
    const sitemapXml = buildSitemap(allUrls);

    // Return the XML response
    return new Response(sitemapXml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Internal Server Error");
  }
}

// Helper function to build the XML structure for the sitemap
function buildSitemap(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  urls.forEach((url) => {
    xml += "<url>";
    xml += `<loc>${url.loc}</loc>`;
    xml += `<lastmod>${url.lastmod}</lastmod>`;
    xml += `<changefreq>${url.changefreq || "weekly"}</changefreq>`;
    xml += `<priority>${url.priority || 0.5}</priority>`;
    xml += "</url>";
  });

  xml += "</urlset>";
  return xml;
}
