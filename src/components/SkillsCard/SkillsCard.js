import "./SkillsCardStyles.css";
import React from "react";

const SkillsCard = () => {
  return (
    <div className="skills">
      <div className="card-container">
        <div className="card">
          <h3>AWS Services</h3>
          <span className="bar"></span>
          <p>EC2, VPC, S3, IAM</p>
          <p>RDS, ELB, CloudWatch, CloudTrail</p>
          <p>AWS Backup, Lambda, Route 53, CloudFront</p>
          <p>Elastic Beanstalk, EventBridge, CloudShell</p>
          <p>SNS, ACM, KMS</p>
        </div>

        <div className="card">
          <h3>DevOps Tools</h3>
          <span className="bar"></span>
          <p>Maven, Tomcat, Apache2, Git, GitHub</p>
          <p>Jenkins, Docker, Docker Compose, Ansible</p>
          <p>Terraform, Terratest, Kubernetes, SonarQube, ArgoCD</p>
        </div>

        <div className="card">
          <h3>Scripting Languages</h3>
          <span className="bar"></span>
          <p>Python</p>
          <p>Shell Scripting</p>
          <p>Grrovy</p>
          <p>YAML</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
