import React, { useState, useMemo, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import HeaderBlog from '../components/HeaderBlog'; 
import FooterBlog from '../components/FooterBlog';
import getPosts from "./BlogsListAPI";

export async function getStaticProps() {
  try {
    const posts = await getPosts();
    return {
      props: { posts },
      revalidate: 10, // Incremental Static Regeneration
    };
  } catch (error) {
    return {
      props: { posts: [] },
    };
  }
}

const BlogPage = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('');
  const postsPerPage = 6;

  // Function to format the date into "Month Year"
  const formatMonth = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const d = new Date(date);
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  // Get unique months from the posts
  const uniqueMonths = useMemo(() => {
    const months = posts.map(post => formatMonth(post.date));
    return [...new Set(months)];
  }, [posts]);

  // Set default to current month and year
  useEffect(() => {
    const currentDate = new Date();
    const currentMonthYear = formatMonth(currentDate);
    setSelectedMonth(currentMonthYear); // Set to current month
  }, []);

  // Filter posts based on selected month
  const filteredPosts = useMemo(() => {
    if (selectedMonth) {
      return posts.filter(post => formatMonth(post.date) === selectedMonth);
    }
    return posts;
  }, [posts, selectedMonth]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleMonthChange = (event) => setSelectedMonth(event.target.value);

  return (
    <>
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
      {/* Main banner section */}
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

      {/* Month-wise Filter */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <select onChange={handleMonthChange} className="form-select" value={selectedMonth}>
              {/* <option value="">Select Month</option> */}
              {uniqueMonths.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <div className="col-md-4 mb-4" key={post.id}>
                <a href={`/blogs/${post.slug}`} className="link">
                  <div className="card h-100">
                    <Image
                      src={post.featured_media_url || "/images/main-webiste-logo/logo-2.webp"}
                      alt={post.title}
                      className="card-img-top"
                      width={400}
                      height={200}
                    />
                    <div className="card-value">
                      <h5>{post.title}</h5>
                      <p style={{ textAlign: "center" }}>
                        Published on: {new Date(post.date).toDateString()}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`btn ${currentPage === index + 1 ? "btn-warning" : "btn-outline-warning"} mx-1`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
      <FooterBlog />
    </>
  );
};

export default BlogPage;
