import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import BlogView from '../components/BlogView';
import Pagination from '../components/Pagination';
import blogData from '../data/blogData.json';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    blogData.sort((a, b) => a.date - b.date);
    setPosts(blogData);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Blogs</title>
        <meta
          name="description"
          content="Alex Younger Personal Portfolio Blogs Page"
        />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Recent Blogs" />
          <BlogView blogs={currentPosts} />
          {!(posts.length > postsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={postsPerPage}
              totalItems={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
