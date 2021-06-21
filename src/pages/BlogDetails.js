import { Helmet } from 'react-helmet';
// import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import blogData from '../data/blogData.json';

function BlogDetails(props) {
  const [blog, setBlog] = useState({});
  const slug = props.match.params.slug;

  useEffect(() => {
    const thisBlog = blogData.find((blogDatum) => blogDatum.slug === slug);
    setBlog(thisBlog);
  }, []);

  // const disqusShortname = 'chester-react'; // found in your Disqus.com dashboard
  // const disqusConfig = {
  //   url: 'https://www.ayweb.dev/', // Homepage link of this site.
  //   identifier: blog.id,
  //   title: blog.title,
  // };

  return (
    <Layout>
      <Helmet>
        <title>{blog?.title || 'Blog Details'}</title>
        <meta
          name="description"
          content={
            blog?.title || 'Alex Younger Personal Portfolio Blog Details Page'
          }
        />
      </Helmet>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          {blog ? (
            <>
              <h1 className="blog-title">{blog.title}</h1>
              <img
                className="blog-main-img"
                src={`/images/blogs/${blog.mainImageUrl}`}
                alt={blog.title}
              />
              <ReactMarkdown>{blog?.markdown}</ReactMarkdown>
              {/* <div className="mi-blog-details-comments mt-30">
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div> */}
            </>
          ) : (
            <h1>Blog not found!</h1>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
