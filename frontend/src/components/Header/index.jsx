import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  // TODO: get user to show info
  const user = null;

  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a className="header__link header__icon" href="/">
              <i className="topIcon fab fa-facebook-square"></i>
            </a>
            <a className="header__link header__icon" href="/">
              <i className="topIcon fab fa-instagram-square"></i>
            </a>
            <a className="header__link header__icon" href="/">
              <i className="topIcon fab fa-pinterest-square"></i>
            </a>
            <a className="header__link header__icon" href="/">
              <i className="topIcon fab fa-twitter-square"></i>
            </a>
          </Col>
          <Col xs="auto">
            <Link className="header__link header__title" to="/">
              HOME
            </Link>
            <Link className="header__link header__title" to="/createPost">
              WRITE
            </Link>
            <Link className="header__link header__title" to="/contact">
              CONTACT
            </Link>
          </Col>
          <Col xs="auto">
            {user ? (
              <Link className="link" to="/settings">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="Avatar"
                />
              </Link>
            ) : (
              <div>
                <Link className="header__link header__title" to="/login">
                  LOGIN
                </Link>
                <Link className="header__link header__title" to="/register">
                  REGISTER
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
