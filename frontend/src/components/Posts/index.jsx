import React from "react";
import PropTypes from "prop-types";
import Post from "components/Post";
import "./Posts.scss";
import { Container } from "reactstrap";

Posts.propTypes = {};

// TODO: get data from database, this's just mock data
const posts = [
  {
    image:
      "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categories: ["Music", "Life"],
    title: "Lorem ipsum dolor sit amet",
    date: "1 hour ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
  },
  {
    image:
      "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    categories: ["Music", "Life"],
    title: "Lorem ipsum dolor sit amet",
    date: "1 hour ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
  },
  {
    image:
      "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categories: ["Music", "Life"],
    title: "Lorem ipsum dolor sit amet",
    date: "1 hour ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
  },
  {
    image:
      "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categories: ["Music", "Life"],
    title: "Lorem ipsum dolor sit amet",
    date: "1 hour ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
  },
  {
    image:
      "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    categories: ["Music", "Life"],
    title: "Lorem ipsum dolor sit amet",
    date: "1 hour ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?",
  },
];

function Posts(props) {
  return (
    <div className="posts">
      {posts &&
        posts.map((post) => (
          <Post
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
