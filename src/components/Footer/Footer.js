import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="info-item">
            <FaHome className="icon" />
            <div>
              <p>548C Jain Colony,</p>
              <p>Khamgaon, MH, India.</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <p>(+91)-9860500682</p>
          </div>

          <div className="info-item">
            <FaMailBulk className="icon" />
            <p>nandkishor.metange99@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About My Journey</h4>
          <p>
            Cloud & DevOps Engineer with 3 years of hands-on expertise in AWS,
            Terraform, Kubernetes, and CI/CD. Known for delivering scalable
            infrastructure and driving automation since transitioning into
            cloud in 2022.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/nandkishor-metange"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
