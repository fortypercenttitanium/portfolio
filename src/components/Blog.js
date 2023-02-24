import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Link } from 'react-router-dom';
import { format } from 'date-fns/';

function Blog(props) {
  const { mainImageUrl, title, date, slug } = props.data;

  const createYear = format(new Date(date), 'yyyy');
  const createMonth = format(new Date(date), 'MMMM');
  const createDay = format(new Date(date), 'do');
  const getShortMonth = (month) => month.slice(0, 3);

  return (
    <div className="mi-blog">
      <div className="mi-blog-content">
        <h5>
          <Link to={`blog/${slug}`}>{title}</Link>
        </h5>
      </div>
      <div className="mi-blog-image">
        <Link to={`blog/${slug}`}>
          <ProgressiveImage
            src={`./images/blogs/${mainImageUrl}`}
            placeholder="/images/blog-image-placeholder.png"
          >
            {(src) => <img src={src} alt={title} />}
          </ProgressiveImage>
        </Link>
        <div className="mi-blog-date">
          <span className="date">{createDay}</span>
          <span className="month">
            {getShortMonth(createMonth)}, {createYear}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
