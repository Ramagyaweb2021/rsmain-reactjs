import Image from 'next/image';
export async function getStaticProps() {
  try {
    const res = await fetch("https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?_embed");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    // Format date and include slug in the post data
    const formattedPosts = posts.map((post) => {
      const formattedDate = new Date(post.date).toLocaleDateString('en-US'); // Format date to 'MM/DD/YYYY'
      return {
        ...post,
        formattedDate,
        slug: post.slug, // Include slug
      };
    });

    return {
      props: {
        posts: formattedPosts || [],
      },
      revalidate: 10, // Revalidate every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function Blog({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div>
      <h1>WordPress Blogs</h1>
      {posts.map((post) => {
        // Featured Image URL
        const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

        return (
          <div key={post.id} className="post">
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {featuredImageUrl && (
              <Image
                src={featuredImageUrl}
                alt={post.title.rendered}
                width={100}
                height={100}
                // style={{ width: '100%', height: 'auto', marginBottom: '15px' }}
              />
            )}
            <p>{post.formattedDate}</p> {/* Display the formatted date */}
            <p>{post.excerpt.rendered}</p> {/* Excerpt or summary */}
            {/* Read More Link */}
            <a href={`/blogs/${post.slug}`}>Read More</a>
          </div>
        );
      })}
    </div>
  );
}
