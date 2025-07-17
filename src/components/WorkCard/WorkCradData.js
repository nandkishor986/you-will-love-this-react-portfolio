import portfolio from "../../assets/portfolio.png";
import adviceapp from "../../assets/adviceapp.png"
import qrcode from "../../assets/qrcode.png";
import { source } from "framer-motion/client";

const ProjectCardData = [
  {
    imgsrc: portfolio,
    title: "React Portfolio Website",
    text: "A responsive portfolio app deployed on AWS using Docker and Kubernetes. It runs on a scalable Kubernetes cluster behind an Application Load Balancer (ALB), secured with an SSL certificate via AWS ACM. The app is served over HTTPS and mapped to a custom domain using Route 53. A complete cloud-native deployment pipeline—containerized, resilient, and production-ready.",
    view: "https://elegant-jalebi-741bfe.netlify.app/",
    source: "https://github.com/nandkishor986/you-will-love-this-react-portfolio"
  },
  {
    imgsrc: adviceapp,
    title: "Complete React App CI/CD & Monitoring",
    text: "A frontend React app deployed on AWS using Docker, Terraform, and Kubernetes with CI/CD via Jenkins, GitOps via ArgoCD, and monitoring through Prometheus & Grafana. It runs on EKS behind a secure ALB with ACM, uses ECR for images, and is routed via Route 53 to ensure scalability, security, and production readiness.",
    view: "https://advice-app-3er12.web.app/",
    source: "https://github.com/nandkishor986/advice_app"
  },
  {
    imgsrc: qrcode,
    title: "A QR Code Generator App using Python",
    text: "A QR Code generator app built using Python and deployed on AWS using Docker & EKS with CI/CD via Jenkins and GitOps via ArgoCD. It ensures secure, observable, and resilient deployments using Helm, Trivy, Prometheus, Grafana and CloudWatch—served via ALB + ACM through Route 53.",
    view: "https://qrcode-scanner-1.onrender.com/",
    source: "https://github.com/nandkishor986/qrcode_scanner"
  },
];

export default ProjectCardData;
