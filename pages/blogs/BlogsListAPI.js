import axios from "axios";

// Function to fetch all posts with featured media
export async function getPosts() {
  const postsWithMedia = [];
  let currentPage = 1;
  const perPage = 100;
  let totalPages = 1;

  try {
    do {
      const response = await axios.get(
        `https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}`
      );

      if (!response.data || !Array.isArray(response.data)) {
        throw new Error("Invalid API response: Data is missing or not an array");
      }

      const posts = response.data;
      totalPages = parseInt(response.headers["x-wp-totalpages"], 10);

      const mappedPosts = posts.map((post) => ({
        id: post.id,
        title: post.title?.rendered || "No Title",
        meta_description: post.yoast_meta?.meta_description || null,
        slug: post.slug || "no-slug",
        excerpt: post.excerpt?.rendered || "No Excerpt",
        date: post.date || "No Date",
        featured_media_url:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        og_title: post.yoast_meta?.og_title || post.title?.rendered || "No Title",
        og_description:
          post.yoast_meta?.og_description || post.excerpt?.rendered || "No Description",
      }));

      postsWithMedia.push(...mappedPosts);
      currentPage++;
    } while (currentPage <= totalPages);

    return postsWithMedia;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return []; 
  }
}
// Default Export
export default getPosts;
