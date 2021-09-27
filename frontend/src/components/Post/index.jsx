import React from "react";
import PropTypes from "prop-types";
import "./Post.scss";

Post.propTypes = {};

function Post(props) {
  const { image, categories, title, date, content } = props;
  return (
    <div className="post">
      <img className="post__image" src={image} alt={title} />
      <div className="post__body">
        <div className="post__category">
          {categories &&
            categories.map((category) => <a href="/">{category}</a>)}
        </div>
        <div className="post__title">{title}</div>
        <div className="post__date">{date}</div>
        <div className="post__content text-truncate">{content}</div>
      </div>
    </div>
  );
}

export default Post;
