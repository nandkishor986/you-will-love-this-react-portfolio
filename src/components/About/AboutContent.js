import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import aws_devops1 from "../../assets/aws_devops1.png";
import aws_devops2 from "../../assets/aws_devops2.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I’m a Cloud & DevOps Engineer passionate about automation and scalable infrastructure
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aws_devops1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={aws_devops2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
