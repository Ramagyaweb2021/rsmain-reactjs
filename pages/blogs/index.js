import HeaderBlog from '../components/HeaderBlog';
import FooterBlog from '../components/FooterBlog';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export async function getStaticProps() {
  try {
    const res = await fetch("https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?_embed&page=1");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    const formattedPosts = posts.map((post) => {
      const formattedDate = new Date(post.date).toLocaleDateString('en-US');
      return {
        ...post,
        formattedDate,
        slug: post.slug,
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
  const [blogPosts, setBlogPosts] = useState(posts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2); // Start from the second page
  const loaderRef = useRef(null); // Ref for the loader element

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://blogs.ramagyaschool.com/wp-json/wp/v2/posts?_embed&page=${page}`);
      const newPosts = await res.json();

      // Check if newPosts is an array before calling map()
      if (Array.isArray(newPosts)) {
        const formattedPosts = newPosts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString('en-US');
          return {
            ...post,
            formattedDate,
            slug: post.slug,
          };
        });

        setBlogPosts((prevPosts) => [...prevPosts, ...formattedPosts]);
        setPage((prevPage) => prevPage + 1); // Increment the page number
      } else {
        console.error("Invalid data format:", newPosts);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Intersection Observer to detect when the loader is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 } // Trigger when the loader is fully visible
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  if (!blogPosts || blogPosts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  return (
    <div>
      <Head>
        <title>Ramagya School - Blog, Reviews and Latest Updates</title>
        <meta name="description" content="Explore blogs from Ramagya School." />
        <meta property="og:description" content="Explore blogs from Ramagya School." />
        <meta property="og:title" content="Ramagya School - Blog, Reviews and Latest Updates" />
        <meta property="og:url" content="https://ramagyaschool.com/blogs" />
        <meta property="og:site_name" content="Ramagya School - Blog, Reviews and Latest Updates" />
        <meta name="twitter:image" content="https://ramagyaschool.com/images/main-webiste-logo/logo-2.webp" />
        <link rel="canonical" href="https://ramagyaschool.com/blogs" />
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
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => {
            const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

            return (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="post p-3 shadow-sm rounded">
                  {featuredImageUrl && (
                    <Image
                      src={featuredImageUrl}
                      alt={post.title.rendered}
                      width={750}
                      height={350}
                      className="img-fluid rounded mb-2"
                      priority
                    />
                  )}
                  <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="h5 mb-2" />
                  <p className="text-muted small">Date: {post.formattedDate}</p>
                  <a href={`/blogs/${post.slug}`} target='_blank' className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={loaderRef} className="text-center">
          {loading && <div className='blog-loading'>Loading...</div>}
        </div>
      </div>
      <FooterBlog />
    </div>
  );
}
