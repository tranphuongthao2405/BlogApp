import React from "react";
import PropTypes from "prop-types";
import About from "components/About";
import Sidebar from "components/Sidebar";
import Posts from "components/Posts";

Homepage.propTypes = {};

function Homepage(props) {
  return (
    <div>
      <About />
      <Posts />
      <Sidebar />
    </div>
  );
}

export default Homepage;
