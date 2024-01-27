
import { createClient, groq } from "next-sanity";

export default function sitemap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://www.degtyarconsulting.com`; // Remove angle brackets from the URL


  const query = groq`{
    "pages": *[_type == 'sitePage']{slug},
  	"project": *[_type == 'project']{slug},
    "people": *[_type == 'person' && title->name != 'Service Ambassador']{slug} ,
	  "article": *[_type == 'article']{slug}
    }`;

  const client = createClient({
    projectId: 'pazbl27w',
    dataset: 'production',  
    token: "", // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
  });

  const urls = await client.fetch(query);

  console.log('urls: ',urls)

  const manuallyMappedUrls = [
    `${baseUrl}/services/e-commerce`,
    `${baseUrl}/services/google-ads`,
    `${baseUrl}/services/seo`,
    `${baseUrl}/services/social-media`,
    `${baseUrl}/services/static-site`,
    `${baseUrl}/services/white-label`,
    `${baseUrl}/services/wordpress-cms`,

    `${baseUrl}/`,
    `${baseUrl}/contact`,
    `${baseUrl}/news`,
    `${baseUrl}/`,
    `${baseUrl}/404`,

  ];
  
  const pages = urls.pages.map((page) => {
    const slug = page.slug.current === "/" ? "/" : `/${page.slug.current}`;
    return `${baseUrl}${slug}`;
  });
  
  const project = urls.project.map((page) => {
    const slug = `/news/${page.slug.current}`;
    return `${baseUrl}${slug}`;
  });
  
  const locations = [...pages, ...project, ...manuallyMappedUrls];
  
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations
          .map((location) => {
            return `<url>
                      <loc>${location}</loc>
                      <changefreq>weekly</changefreq>
                  </url>
                `;
          })
          .join("")}
    </urlset>
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();

  return {
    props: {},
  };
}