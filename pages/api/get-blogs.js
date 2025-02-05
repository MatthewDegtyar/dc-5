// /pages/api/get-blogs.js

export default async function handler(req, res) {
    const { page = 1, limit = 10 } = req.query; // Extract page and limit from query params
    const offset = (page - 1) * limit; // Calculate offset based on the page number
  
    try {
      // Proxy request to the external API
      const response = await fetch(
        `http://54.224.177.93:8000/v1/blogposts/by-project/6?offset=${offset}&limit=${limit}&sort_by=date_created&order=desc`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
  
      if (!response.ok) {
        // Handle failed requests
        console.error("Failed to fetch data:", response.status, response.statusText);
        return res.status(response.status).json({
          error: "Failed to fetch data from the external API",
        });
      }
  
      const data = await response.json(); // Parse the JSON response
      return res.status(200).json(data); // Send the data back to the client
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  