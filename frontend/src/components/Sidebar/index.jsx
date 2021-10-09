/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import "./Sidebar.scss";

index.propTypes = {};

function index(props) {
  return (
    <div className="sidebar">
      <Container>
        <Row>
          <Col className="sidebar__item">
            <span className="sidebar__title">ABOUT ME</span>
            <img
              src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
              alt="Sidebar image"
              className="sidebar__image"
            />
            <p className="sidebar__text text-truncate">
              Laboris sunt aute cupidatat velit magna velit ullamco dolore
              mollit amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
          </Col>
          <Col className="sidebar__item">
            <span className="sidebar__title">CATEGORIES</span>
            <ul className="sidebar__list">
              <li>
                {/* to="/posts?category=life" */}
                <Link to="/">Life</Link>
              </li>
              <li>
                <Link to="/">Music</Link>
              </li>
              <li>
                <Link to="/">Sport</Link>
              </li>
              <li>
                <Link to="/">Style</Link>
              </li>
              <li>
                <Link to="/">Tech</Link>
              </li>
              <li>
                <Link to="/">Cinema</Link>
              </li>
            </ul>
          </Col>
          <Col className="sidebar__item">
            <span className="sidebar__title">FOLLOW US</span>
            <a className="sidebar__icon" href="/">
              <i className="topIcon fab fa-facebook-square"></i>
            </a>
            <a className="sidebar__icon" href="/">
              <i className="topIcon fab fa-instagram-square"></i>
            </a>
            <a className="sidebar__icon" href="/">
              <i className="topIcon fab fa-pinterest-square"></i>
            </a>
            <a className="sidebar__icon" href="/">
              <i className="topIcon fab fa-twitter-square"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
