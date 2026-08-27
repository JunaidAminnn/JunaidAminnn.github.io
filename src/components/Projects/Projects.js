import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calcVault from "../../Assets/Projects/calc_vault.jpg";
import calorieWise from "../../Assets/Projects/calorie_wise.jpg";
import khattaFlow from "../../Assets/Projects/khatta_flow.jpg";
import lemonIptv from "../../Assets/Projects/lemon_iptv.jpg";
import digitalTasbeeh from "../../Assets/Projects/digital_tasbeeh.jpg";
import smartAgri from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Mobile Applications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production native iOS and cross-platform Flutter applications published and active on the App Store.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcVault}
              isBlog={false}
              title="Calculator Vault Pro"
              description="Published high-security privacy mobile application with over 1,000+ daily active users (DAU). Provides stealth photo/video encryption, disguised calculator interface, biometric unlock, and secure local storage."
              ghLink="https://github.com/JunaidAminnn"
              appStoreLink="https://apps.apple.com/tn/app/calculator-vault-hide-photos/id6759670222"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calorieWise}
              isBlog={false}
              title="Calorie Tracker & AI Meal Scanner"
              description="Smart nutrition and calorie tracking mobile application built with Flutter. Integrates advanced Qwen Multimodal AI Vision models for instant meal recognition, caloric estimation, and automated macronutrient breakdown."
              ghLink="https://github.com/JunaidAminnn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={khattaFlow}
              isBlog={false}
              title="Khatta Flow"
              description="Native iOS personal financial management application, debt tracker, and digital ledger book built using Swift and SwiftUI for tracking daily cash flows, IOU debts, income/expense analytics, and transaction logs."
              ghLink="https://github.com/JunaidAminnn"
              appStoreLink="https://apps.apple.com/tn/app/khatta-flow-daily-ledger-book/id6756983630"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lemonIptv}
              isBlog={false}
              title="Lemon IPTV"
              description="High-performance IPTV video streaming application allowing users to watch live global TV channels via M3U playlist URLs, custom video stream rendering, favorite channel tagging, and playlist management."
              ghLink="https://github.com/JunaidAminnn"
              appStoreLink="https://apps.apple.com/tn/app/lemon-iptv-smart-player/id6754886550"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalTasbeeh}
              isBlog={false}
              title="Digital Tasbeeh"
              description="Feature-rich Islamic utility mobile application featuring an accurate Qibla Finder, full Quran reader, digital Tasbeeh counter, and automated prayer time notifications."
              ghLink="https://github.com/JunaidAminnn"
              appStoreLink="https://apps.apple.com/tn/app/tasbih-counter-qibla-finder/id6751149193"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartAgri}
              isBlog={false}
              title="Smart AI Agriculture System (FYP)"
              description="Intelligent IoT environmental monitoring platform utilizing Flutter, SwiftUI, Python backend, ESP32 microcontrollers, and predictive ML models (Pandas, NumPy, Scikit-learn) for automated crop care."
              ghLink="https://github.com/JunaidAminnn"
              demoLink="https://dply.me/ufnl4z"
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "40px" }}>
          Web Development & <strong className="purple">Admin Platforms </strong>
        </h1>
        <p style={{ color: "white" }}>
          Full-stack web applications, database management, and backend administrative dashboards.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pixoraft Web Admin Dashboard"
              description="Modern web administration dashboard connected directly to the core Python backend powering 3 mobile apps. Features real-time Firebase data sync, Stripe payment processing, and Hostinger database control."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Art Gallery (E-Commerce)"
              description="Full-stack web application built using HTML, CSS, JavaScript, and MySQL for inventory management, user authentication, and secure e-commerce transactions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
