import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer passionate about crafting high-performance mobile applications and scalable full-stack web platforms.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Swift, SwiftUI, Flutter (Dart), Python, and JavaScript{" "}
                </b>
              </i>
              — with deep experience building both mobile client apps and backend server ecosystems.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Native iOS & Cross-Platform Apps, Custom Python Backends,{" "}
                </b>
              </i>
              and integrating full-suite <b className="purple">Firebase Services (Firestore, Auth, Crashlytics)</b>.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Swift & Flutter </b> alongside modern backend frameworks like{" "}
              <i>
                <b className="purple">Node.js</b> and{" "}
                <b className="purple">Python REST APIs</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
