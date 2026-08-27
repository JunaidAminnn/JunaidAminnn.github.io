import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Muhammad Junaid Amin</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MJA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/JunaidAminnn"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/junaid-amin-6bb237268/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:itsmejunaidamin@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="Email: itsmejunaidamin@gmail.com"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/923495196977"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp / Phone: +92 349 5196977"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
