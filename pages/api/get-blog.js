// /pages/api/get-post.js

export default async function handler(req, res) {
    const { slug } = req.query;
  
    // Validate slug
    if (!slug) {
      return res.status(400).json({ error: "Slug is required" });
    }
  
    try {
      // Fetch data from the external API using the slug
      const response = await fetch(
        `http://54.224.177.93:8000/v1/blogposts/by-slug/${slug}`, // Use the slug to get the specific post
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
  
      // Handle errors if the response is not ok
      if (!response.ok) {
        console.error("Failed to fetch post [12]:", response.statusText);
        return res.status(404).json({ error: "Post not found" });
      }
  
      const data = await response.json(); // Parse the JSON response
      console.log("[DEV] 123", data);
      
      // Return the post data as the response
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching post:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  