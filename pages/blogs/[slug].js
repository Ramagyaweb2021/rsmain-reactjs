import React from 'react';
import Image from 'next/image';

// Fetch individual post based on slug
export async function getStaticPaths() {
  try {
    const res = await fetch("https://blogs.ramagyaschool.com/wp-json/wp/v2/posts");
    const posts = await res.json();

    // Generate paths for all blog posts based on their slugs
    const paths = posts.map((post) => ({
      params: { slug: encodeURIComponent(post.slug) }, // URL encode the slug
    }));

    //console.log("Generated paths:", paths); // Debug log to check paths

    return {
      paths,
      fallback: false, // Show 404 for any paths that don't exist
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    // Fetch the post data based on the slug
    const res = await fetch(`https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
    const post = await res.json();

    if (!post.length) {
      return { notFound: true }; // Return a 404 if no post is found
    }

    return {
      props: {
        post: post[0], // We expect only one post to match the slug
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return { notFound: true }; // Return 404 in case of error
  }
}

const Post = ({ post }) => {
  if (!post) return <p>Post not found</p>;

  // Featured Image URL
  const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {featuredImageUrl && (
        <Image
          src={featuredImageUrl}
          alt={post.title.rendered}
          width={500}
          height={200}
          layout="responsive" // Ensures the image scales properly
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> {/* Full post content */}
    </div>
  );
};

export default Post;
