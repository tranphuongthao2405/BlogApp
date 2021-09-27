import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";

Footer.propTypes = {};

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <ul className="footer__tags">
            <li>
              <a href="/">Liên hệ</a>
            </li>
            <li>
              <a href="/">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="/">Nhà phát triển</a>
            </li>
            <li>
              <a href="/">Trợ giúp</a>
            </li>
            <li>
              <a href="/">Pháp lý</a>
            </li>
            <li>
              <a href="/">Cài đặt cookie</a>
            </li>
          </ul>
          <p>© Bản quyền 2021. Bảo lưu toàn quyền.</p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
