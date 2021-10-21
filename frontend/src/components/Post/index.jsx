import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Post.scss";

Post.propTypes = {};

function Post(props) {
  const { id, image, categories, title, date, content } = props;
  return (
    <div className="post">
      <Link to={`/post/${id}`}>
        <img className="post__image" src={image} alt={title} />
      </Link>
      <div className="post__body">
        <div className="post__category">
          {categories &&
            categories.map((category) => (
              <Link to={`/`}>{category}</Link>
            ))}
        </div>
        <div className="post__title"><Link to={`/post/${id}`}>{title}</Link></div>
        <div className="post__date">{date}</div>
        <div className="post__content text-truncate">{content}</div>
      </div>
    </div>
  );
}

export default Post;
