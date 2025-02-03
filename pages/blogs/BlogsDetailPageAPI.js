import axios from "axios";

// Function to fetch a specific post by its slug
export async function getPostBySlug(slug) {
  try {
    const response = await axios.get(
      `https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );

    if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
      throw new Error(`Post not found for slug: ${slug}`);
    }

    const post = response.data[0];

    return {
      id: post.id,
      title: post.title?.rendered || "No Title",
      slug: post.slug || "no-slug",
      excerpt: post.excerpt?.rendered || "No Excerpt",
      content: post.content?.rendered || "No Content",
      date: post.date || "No Date",
      featured_media_url:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder-image.jpg",
      og_title: post.yoast_meta?.og_title || post.title?.rendered || "No Title",
      og_description:
        post.yoast_meta?.og_description || post.excerpt?.rendered || "No Description",
    };
  } catch (error) {
    console.error("Error fetching post:", error.response?.data || error.message);
    return null; // Return null to avoid breaking the page
  }
}

// ✅ Correct Exports
export default getPostBySlug;
