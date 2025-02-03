import { getAllPostSlugs, getPostBySlug } from "./BlogsDetailPageAPI";
import Head from "next/head";
import Image from "next/image";
import HeaderBlog from "../components/HeaderBlog"; // Adjust this path if needed
import FooterBlog from "../components/FooterBlog";

// Function to decode HTML entities (only for client-side)
const decodeHtmlEntities = (str) => {
  if (typeof window !== 'undefined') {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.body.textContent || "";
  }
  return str; // If on the server-side, return the string as-is
};

// Function to trim the description to a specific length
const getMetaDescription = (description) => {
  const maxLength = 160; // Limit to 160 characters
  if (description && description.length > maxLength) {
    return description.substring(0, maxLength) + '.'; // Truncate and add ellipsis
  }
  return description;
};

// Fetch all blog slugs for generating static paths
export async function getStaticPaths() {
  try {
    const slugs = await getAllPostSlugs(); // Fetch all slugs

    const paths = slugs.map((slug) => ({
      params: { slug },
    }));

    return { paths, fallback: false }; // `false` ensures all paths are pre-built
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return { paths: [], fallback: false }; // Ensure fallback is handled
  }
}

// Fetch the data for a specific post based on its slug
export async function getStaticProps({ params }) {
  try {
    const post = await getPostBySlug(params.slug); // Fetch post based on slug

    if (!post) {
      return { notFound: true }; // Return 404 if no post is found
    }

    return {
      props: { post },
      revalidate: 10, // Incremental Static Regeneration
    };
  } catch (error) {
    console.error("Error fetching post:", error); // Log error details
    return {
      notFound: true, // Return 404 on error
    };
  }
}

const BlogDetail = ({ post }) => {
  if (!post) {
    return null; // Instead of rendering <p>Post not found.</p>, return null to render nothing
  }

  const yoastData = post.yoast_head_json || {};
  const canonicalUrl = yoastData.canonical || `https://ramagyaschool.com/blogs/${post.slug}`;
  const decodedTitle = decodeHtmlEntities(post.title);
  const rawDescription = decodeHtmlEntities(post.excerpt || yoastData.description || "Default description");
  const metaDescription = getMetaDescription(rawDescription); // Apply the meta description limit

  return (
    <>
      <Head>
        <meta name="description" content={metaDescription} />
        <title>{decodedTitle}</title>
        <meta property="og:title" content={yoastData.og_title || post.title || "Default OG Title"} />
        <meta property="og:url" content={yoastData.og_url || canonicalUrl} />
        <meta name="twitter:card" content={yoastData.twitter_card} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <HeaderBlog />
      {/* Main banner section of the page */}
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

      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <a href="https://ramagyaschool.com/blogs/" className="learn-more-button">&nbsp;Back</a>
            <h1>{decodedTitle}</h1>
            {post.featured_media_url && (
              <Image
                src={post.featured_media_url}
                alt={post.title || "Featured Media"}
                className="mb-3"
                width={1250} // Replace with the desired width
                height={500} // Replace with the desired height
              />
            )}

            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <small>Published on: {new Date(post.date).toLocaleDateString()}</small>
          </div>
        </div>
      </div>
      <FooterBlog />
    </>
  );
};

export default BlogDetail;
