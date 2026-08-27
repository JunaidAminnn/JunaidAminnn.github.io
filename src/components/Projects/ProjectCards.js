import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" loading="lazy" style={{ objectFit: "cover", maxHeight: "220px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {props.appStoreLink && (
          <Button
            variant="primary"
            href={props.appStoreLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
          >
            <AiFillApple /> &nbsp;
            {"App Store"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: (props.ghLink || props.appStoreLink) ? "10px" : "0px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
