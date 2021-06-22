import { Helmet } from 'react-helmet';
// import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import blogData from '../data/blogData.json';
import { format } from 'date-fns';

function BlogDetails(props) {
  const [blog, setBlog] = useState();
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
              <h2 className="blog-author">
                written by {blog.author} on{' '}
                {format(new Date(blog.date), 'MMMM do, yyyy')}
              </h2>
              {blog.lastEdited && (
                <h3 className="blog-edited">
                  <em>
                    last edited{' '}
                    {format(new Date(blog.lastEdited), 'MMMM do, yyyy')}
                  </em>
                </h3>
              )}
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
