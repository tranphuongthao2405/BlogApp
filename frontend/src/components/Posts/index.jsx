import React from "react";
import PropTypes from "prop-types";
import Post from "components/Post";
import "./Posts.scss";
import { Container } from "reactstrap";
import { posts } from "../../constant/index";

Posts.propTypes = {};

// TODO: get data from database, this's just mock data

function Posts(props) {
  return (
    <div className="posts">
      {posts &&
        posts.map((post) => (
          <Post
            id={post.id}
            image={post.image}
            categories={post.categories}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))}
    </div>
  );
}

export default Posts;
