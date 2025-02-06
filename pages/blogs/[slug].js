//import { useEffect, useState } from 'react';
import Head from 'next/head';
import HeaderBlog from '../components/HeaderBlog';
import FooterBlog from '../components/FooterBlog';
import Image from 'next/image';

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    // Fetch post by slug
    const res = await fetch(`https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);

    if (!res.ok) {
      return {
        notFound: true, // Will trigger a 404 if post not found
      };
    }

    const post = await res.json();
    if (post.length === 0) {
      return {
        notFound: true, // Trigger 404 if no post matches the slug
      };
    }

    const formattedPost = post[0]; // Get the first post from the array
    return {
      props: {
        post: formattedPost,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true, // Trigger 404 on error
    };
  }
}

const BlogPost = ({ post }) => {
  if (!post) {
    return <p>Post not found.</p>;
  }

  // Extract Yoast SEO metadata
  const seo = post.yoast_head_json || {};
  const title = seo.title || post.title.rendered;
  const description = seo.description || post.excerpt.rendered.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const featuredImageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // Concatenate a valid title string for the <title> tag
  //const pageTitle = `${post.title.rendered} - Ramagya School Blog`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={seo.og_title || title} />
        <meta property="og:description" content={seo.og_description || description} />
        <meta property="og:image" content={seo.og_image?.[0]?.url || featuredImageUrl} />
        <meta property="og:url" content={`https://ramagyaschool.com/blogs/${post.slug}`} />
        <link rel="canonical" href={`https://ramagyaschool.com/blogs/${post.slug}`} />
        {/* <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={featuredImageUrl || "https://ramagyaschool.com/images/main-webiste-logo/logo-2.webp"} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={`https://ramagyaschool.com/blogs/${post.slug}`} />
        <meta property="og:site_name" content="Ramagya School - Blog, Reviews and Latest Updates" />
        <meta name="twitter:image" content={featuredImageUrl || "https://ramagyaschool.com/images/main-webiste-logo/logo-2.webp"} />
        <link rel="canonical" href={`https://ramagyaschool.com/blogs/${post.slug}`} /> */}
      </Head>
      <HeaderBlog />
      <section className="section banner-sec banner-section-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-text">
                <h1 className="wow animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s' }}>
                  Blogs!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-1">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {featuredImageUrl && (
          <Image src={featuredImageUrl} alt={post.title.rendered} width={750} height={350} className="img-fluid mb-4" priority />
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered, // Render the post content
          }}
        />
      </div>
      <FooterBlog />
    </div>
  );
};

export default BlogPost;
