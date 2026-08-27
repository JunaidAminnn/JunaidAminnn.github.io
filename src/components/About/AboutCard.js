import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Muhammad Junaid Amin</span>{" "}
            from <span className="purple">Islamabad, Pakistan</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer (Full-Stack & Mobile)</span> at{" "}
            <span className="purple">Pixoraft Solutions</span>.
            <br />I hold a Bachelor of Science (BS) in{" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">Capital University of Science & Technology (CUST), Islamabad</span> (CGPA: 3.01 / 4.00).
            <br />
            <br />
            Apart from coding, here are a few activities I am passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening & Plant Care 🌱
            </li>
            <li className="about-activity">
              <ImPointRight /> DIY Crafts & Creative Projects 🛠️
            </li>
            <li className="about-activity">
              <ImPointRight /> Hardware & IoT Automation 💡
            </li>
            <li className="about-activity">
              <ImPointRight /> Automotive & Car Enthusiast 🚗
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "First, solve the problem. Then, write the code."{" "}
          </p>
          <footer className="blockquote-footer">John Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
