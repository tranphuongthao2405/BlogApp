import React from "react";
import PropTypes from "prop-types";
import "./BlogPost.scss";
import DetailPost from "components/DetailPost";

Post.propTypes = {};

function Post(props) {
  return <div className="blog-post">
    <DetailPost />
  </div>;
}

export default Post;
