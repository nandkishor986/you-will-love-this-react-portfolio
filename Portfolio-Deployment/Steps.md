Domain Registrar: Porkbun

Username: nandkishor986
Password: mcL@rmiEncDNJc8

======================================================================================================================================================================================

Tools:
Create a Folder on Desktop: Tools

Install Docker Desktop on Windows: - https://www.docker.com/products/docker-desktop 

- Enable WSL2 integration (it will guide you through it)
-	Restart our machine after installation
-	Verify: docker version & docker info


Install Chocolatey (WPM):

Open Powershell as Administrator and Run

Set-ExecutionPolicy Bypass -Scope Process -Force; `
-	[System.Net.ServicePointManager]::SecurityProtocol = `
-	[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
-	iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))


Step 5: Install AWS CLI, kubectl, eksctl

choco install awscli -y
-	choco install kubernetes-cli -y      # this is kubectl
-	choco install eksctl -y


Step 7: Configure AWS CLI

Dockerize our React App:

* Create a Docker File in the Root 


# Stage 1: Build React app
-	FROM node:18-alpine AS builder
-	WORKDIR /app
-	COPY package*.json ./
-	RUN npm install
-	COPY . .
-	RUN npm run build
-	
-	# Stage 2: Serve with Nginx
-	FROM nginx:stable-alpine
-	COPY --from=builder /app/build /usr/share/nginx/html
-	EXPOSE 80
-	CMD ["nginx", "-g", "daemon off;"]


Create .dockerignore


node_modules
-	build
-	.dockerignore
-	Dockerfile
-	.git
-	.gitignore


3. Build Docker Image

docker image build -t nandkishor986/upinclouds.com .


4. Once the Image is Build - Try running the container on local:-

docker container run -d -p 3000:80 --name upinclouds.com nandkishor986/upinclouds.com


5. Login to the Docker and Push the Image

docker login and docker image push nandkishor986/upinclouds.com


6. STEP 4: Set up Kubernetes Cluster (AWS EKS)

1. Create a Cluster using eksctl:- eksctl create cluster --name portfolio-cluster --region us-east-1 --nodes 2 --node-type t3.medium


Update kubeconfig to use our new cluster:

aws eks --region us-east-1 update-kubeconfig --name portfolio-cluster


STEP 5: Create Kubernetes Deployment & Service

Create a file deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-deployment
  labels:
    app: portfolio
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
        - name: portfolio
          image: nandkishor986/upinclouds.com
          ports:
            - containerPort: 80

---

apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: portfolio-ingress
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":80}]'
    alb.ingress.kubernetes.io/backend-protocol: HTTP
    alb.ingress.kubernetes.io/healthcheck-path: /
    alb.ingress.kubernetes.io/load-balancer-name: portfolio-alb
    alb.ingress.kubernetes.io/group.name: portfolio-group
spec:
  ingressClassName: alb
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: portfolio-service
                port:
                  number: 80



kubectl apply -f deployment.yaml
kubectl get svc portfolio-service


DETAILED STEP-BY-STEP FIX

Step 1: Create IAM OIDC Provider (one-time setup)


Step 2: Create IAM Policy for ALB Controller - Download the policy:- curl -o iam-policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/main/docs/install/iam_policy.json

aws iam create-policy \
  --policy-name AWSLoadBalancerControllerIAMPolicy \
  --policy-document file://iam-policy.json




Step 3: Create IAM Role for the Controller

eksctl create iamserviceaccount \
  --cluster portfolio-cluster \
  --namespace kube-system \
  --name aws-load-balancer-controller \
  --attach-policy-arn arn:aws:iam::730335668879:policy/AWSLoadBalancerControllerIAMPolicy \
  --approve


Step 4: Install Load Balancer Controller

1. Add Helm Repo:- helm repo add eks https://aws.github.io/eks-charts
helm repo update

Use Helm Instead (preferred for future updates)

helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=portfolio-cluster \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller \
  --set region=us-east-1 \
  --set vpcId=vpc-0d775e73125a91f7f \
  --set image.tag="v2.7.1"



Step 5: Deploy Your App with Ingress (ALB)
Update your deployment.yaml as follows:

1. Keep the Deployment
✅ No changes to the actual Deployment block.

2. Change the Service (remove type: LoadBalancer)


kubectl get ingress
kubectl get svc


PART 1: ACM (HTTPS Support with AWS Certificate Manager)
🎯 Goal: Get a TLS/SSL certificate for technosaffron.com using ACM
🔧 Step 1: Open AWS ACM Console
Go to: https://console.aws.amazon.com/acm/home?region=us-east-1

Click “Request a certificate”

Choose Request a public certificate

Click Next

 Step 2: Enter Your Domain Name
Add: technosaffron.com
*.technosaffron.com


🔐 Step 3: Choose Validation Method
Select DNS validation → Click Next

🧪 Step 4: Review and Request
Click “Request”




Step 5: Add CNAME in Route 53

* First we should have a Hosted Zone created in the Route53 and then we have add AWS provided Nameservers in our Nameservers from where we have purchased the domain. +

You will now see a CNAME record to be added to Route 53.

Click “Create record in Route 53” (recommended if you already use Route 53), or manually add a DNS record like this:

Name	Type	Value
_abcxyz.technosaffron.com	CNAME	acm-validation.aws...

Once added, it will validate in a few minutes.

✅ Done! Certificate will show status: Issued


 PART 2: Configure CloudFront CDN
🎯 Goal: Distribute your app globally with caching + HTTPS

Click Create Distribution

✍️ Step 2: Configure Origin Settings
Setting	Value
Origin Domain	Your ALB DNS name (e.g., portfolio-alb-xxxx.elb.amazonaws.com)
Protocol	HTTPS only
Origin Protocol Policy	HTTP only (because your app on ALB doesn’t yet support HTTPS unless you configure ALB TLS)
Name	portfolio-alb (auto filled)

Step 3: Default Behavior Settings
Setting	Value
Viewer Protocol Policy	Redirect HTTP to HTTPS
Allowed HTTP Methods	GET, HEAD, OPTIONS
Caching	Use default settings
Compress objects automatically	✅ Yes


🔐 Step 4: Configure HTTPS
Setting	Value
Custom SSL Certificate	Choose your ACM certificate for technosaffron.com
Supported HTTP versions	HTTP/2, HTTP/3 (default)
Price class	Choose your region preference


Step 5: Create the Distribution
Click Create Distribution

Wait for 5–10 minutes. The status will go from In Progress → Deployed


PART 3: Domain Setup using Route 53
🎯 Goal: Connect technosaffron.com to your CloudFront distribution


Step 1: Get CloudFront DNS
Once the distribution is deployed, you’ll see:

dxxxxxxxxxxxxx.cloudfront.net



Step 2: Add Route 53 Record
In Route 53:

Open your hosted zone for technosaffron.com

Click Create Record

Choose:

Record Name: (leave blank for root domain)

Record Type: A - IPv4 address

Alias: ✅ Yes

Alias Target: Choose the CloudFront distribution from the list

Click Create Record

