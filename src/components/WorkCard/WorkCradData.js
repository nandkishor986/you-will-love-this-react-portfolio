import portfolio from "../../assets/portfolio.png";
import toDoList from "../../assets/toDoList.png"
import shopee from "../../assets/shopee.png";
import { source } from "framer-motion/client";

const ProjectCardData = [
  {
    imgsrc: portfolio,
    title: "React Portfolio Website",
    text: "A responsive portfolio app deployed on AWS using Docker and Kubernetes. It runs on a scalable Kubernetes cluster behind an Application Load Balancer (ALB), secured with an SSL certificate via AWS ACM. The app is served over HTTPS and mapped to a custom domain using Route 53. A complete cloud-native deployment pipeline—containerized, resilient, and production-ready.",
    view: "https://elegant-jalebi-741bfe.netlify.app/",
    source: "https://github.com/nandkishor986/you-will-love-this-react-portfolio.git"
  },
  {
    imgsrc: toDoList,
    title: "Complete MERN Stack CI/CD & Monitoring",
    text: "A full-stack MERN app deployed on AWS using Docker, Terraform, and Kubernetes with CI/CD via Jenkins, GitOps via ArgoCD, and monitoring through Prometheus & Grafana. It runs on EKS behind a secure ALB with ACM, uses ECR for images, and is routed via Route 53 to ensure scalability, security, and production readiness.",
    view: "https://todo-list-app-bfed3.web.app/",
    source: "https://github.com/nandkishor986/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project.git"
  },
  {
    imgsrc: shopee,
    title: "Shopee Ecommerce App",
    text: "A scalable MERN-based eCommerce app deployed on AWS using Docker, Kubernetes, and EKS with CI/CD via Jenkins and GitOps via ArgoCD. It ensures secure, observable, and resilient deployments using Helm, Trivy, Prometheus, Grafana, Fluent Bit, and CloudWatch—served via ALB + ACM through Route 53.",
    view: "https://www.youtube.com/watch?v=P8YuWEkTeuE",
  },
];

export default ProjectCardData;
