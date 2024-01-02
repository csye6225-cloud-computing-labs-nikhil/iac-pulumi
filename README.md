# 🌩️ Cloud Computing - IAC - Pulumi

Repository to handle infrastructure using Pulumi.

## `iac-aws` - Infrastructure as Code using Pulumi

![Pulumi](https://img.shields.io/badge/Pulumi-Infrastructure_as_Code-blue)
![AWS](https://img.shields.io/badge/AWS-Cloud_Service-orange)
![GCP](https://img.shields.io/badge/GCP-Cloud_Service-blue)

`iac-aws` is an Infrastructure as Code (IaC) project using Pulumi, focusing on deploying and managing cloud resources on AWS and GCP. This project automates the setup of cloud infrastructure, ensuring consistent and repeatable deployments.

## Runtime

- ![Node.js](https://img.shields.io/badge/Node.js-Language-green) **Language**: Node.js
- ![Pulumi](https://img.shields.io/badge/Pulumi-IaC_Tool-red) **IaC Tool**: Pulumi

### Other Repositories
- Web Application: [GitHub - Webapp](https://github.com/Nikhil-Reddy-Karukonda/webapp)
- Serverless: [GitHub - Serverless](https://github.com/Nikhil-Reddy-Karukonda/serverless-fork)

## Configuration

This project uses various configurations for AWS, GCP, and other services as specified in the `config` section. Below is an outline of the key configurations used:

### AWS Configurations

- ![Profile](https://img.shields.io/badge/Profile-demo-yellow) **Profile**: demo
- ![Region](https://img.shields.io/badge/Region-us_east_1-blue) **Region**: us-east-1
- ![Resources](https://img.shields.io/badge/Resources-EC2%2C%20AutoScaling%2C%20RDS%2C%20S3%2C%20DynamoDB-orange) **Resources**: Instance Types, Storage, Security, Networking Settings, S3, DynamoDB, Route53 etc.
- ![Security](https://img.shields.io/badge/Security-Encryption%20and%20Security-red) **Security**: Special attention to encryption and secure handling of sensitive information.

### GCP Configuration

- ![Project](https://img.shields.io/badge/Project-project_name-blue) **Project**: project_name
- ![Bucket](https://img.shields.io/badge/Bucket-assignments_bucket-orange) **Bucket Name**: assignments_bucket
- ![Region](https://img.shields.io/badge/Region-us_east1-blue) **Region**: us-east1
- ![Permissions](https://img.shields.io/badge/Permissions-Service_Account_Role_Permissions-green) **Service Account Role Permissions**

### Security

- ![Key Management](https://img.shields.io/badge/Key_Management-Securely_Managed-red) **Key Management**: Passwords and sensitive keys are not stored in plaintext. They are managed securely.
- ![Encryption](https://img.shields.io/badge/Encryption-Encryption_Salt-blue) **Encryption Salt**: For secure operations.

### Infrastructure as Code

- ![IaC](https://img.shields.io/badge/IaC-Pulumi_Configurations-red) **IaC Tools**: Details about IaC tools and scripts used, such as Pulumi configurations.
- ![Settings](https://img.shields.io/badge/Settings-Deployment%2C_Scaling%2C_Management-orange) **Cloud Resources**: Specific settings for deployment, scaling, and management of cloud resources.

## 📋 Prerequisites

Before you begin, ensure you have the following prerequisites installed on your local machine:

- [Pulumi](https://www.pulumi.com/docs/get-started/install/) - Infrastructure as Code tool.
- [AWS CLI](https://aws.amazon.com/cli/) - with valid AWS credentials configured.
- Install `gcloud` cli and login with `gcloud auth login` and `gcloud auth application-default login`

## 🚀 Getting Started

### 1. **Clone the Repository:**
   - Clone this repository to your local machine.

### 2. **Initialize a New Pulumi Project:**
   - Run the following command to create a new AWS TypeScript project with Pulumi:
     ```bash
     pulumi new aws-typescript
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### 3. **Configure Pulumi Stack:**
   - Configure your Pulumi stack using the stack configuration file `Pulumi.<stack-name>.yaml`.
   - Stack name can be `dev` or `demo`.
   - Configuration example:
     ```yaml
     config:
       aws:profile: <your-aws-profile>
       aws:region: <your-aws-region>
     ```

### 4. **Deploy with Pulumi:**
   - Initialize and deploy your Pulumi stack:
     ```bash
     pulumi up
     ```
   - Review the changes and confirm the deployment when prompted.

## 🗑️ Destroying the Stack
   - To tear down the deployed infrastructure:
     ```bash
     pulumi destroy
     ```
   - Review the changes and confirm the destruction when prompted.

## 🔑 Important Notes
   - Ensure necessary IAM permissions to create and manage AWS resources within the specified VPC.
   - Update security groups, IAM roles, and other security configurations as needed.
   - Be mindful of the costs associated with AWS resources. Destroy resources when not needed.

## 🛠️ Useful Commands
   ```bash
   pulumi login --local
   pulumi new --force
   cat ~/.aws/config
   cat ~/.aws/credentials
   pulumi version
   which pulumi
   export AWS_PROFILE=dev
   echo $AWS_PROFILE
   pulumi config set aws:region us-west-1
   pulumi stack ls
   pulumi stack rm demo
   pulumi up
   pulumi refresh
   pulumi destroy
```

📚 Additional Resources
https://www.pulumi.com/docs/
https://www.pulumi.com/docs/install/
https://www.pulumi.com/docs/concepts/
https://www.pulumi.com/docs/clouds/aws/

📜 Import SSL Certificate from local to AWS ACM:
```sudo aws acm import-certificate --certificate fileb:///path/to/certificate.crt --certificate-chain fileb:///path/to/certificate.ca-bundle --private-key fileb:///path/to/private.key --profile demo ```

## 🌐 Networking with Pulumi
Pulumi automates the creation of networking resources for your application. Here's what gets set up:

- **Virtual Private Cloud (VPC)**
- **Internet Gateway**
- **Route Tables and Routes**
  - Public Route Table: Associated with all public subnets. Includes an entry for the internet gateway.
  - Private Route Table: Associated with all private subnets. Does not include an entry for the internet gateway.
- **Amazon RDS Instance**: Deployed in the private subnet and is not accessible over the internet.

## 🛠️ Extending to Google Cloud

Enable required google services in the project from the console.
Pulumi further extends its capabilities to Google Cloud by automating the following:

1. **Creating Google Cloud Storage Bucket**: A secure place for your data.
2. **Setting Up Google Service Account and Access Keys**: For secure interactions with Google Cloud resources.
3. **Lambda Function Configuration**:
   - Deployment of the Lambda Function.
   - Configuration with Google Access Keys and the bucket name.
   - Email server configuration, including secrets, for the Lambda Function.
4. **Amazon DynamoDB Instance**: Provisioning a DynamoDB instance for the Lambda Function's use.
5. **IAM Roles & Policies**: Establishing necessary roles and policies for the Lambda Function.

## 📧 SNS Integration and Load Balancer
- **Amazon SNS Topic**: Pulumi creates the SNS topic. The topic information is then passed to the web application using EC2 user data script (startup script - performs tasks during the startup process of a virtual machine (VM) instance).
- **Load Balancer**: Utilizes valid SSL certificates for secure communication.

## Pulumi.demo.yaml Template
```config:
    aws:profile: demo
    aws:region: us-east-1
    gcp:project: 
    iac-aws:MAILGUN_API_KEY: 
    iac-aws:allocatedStorage: "20"
    iac-aws:allowedEgressCIDRs: "0.0.0.0/0"
    iac-aws:allowedEgressPorts: "22,80,443,5432"
    iac-aws:allowedIngressCIDRs: "0.0.0.0/0"
    iac-aws:allowedIngressPorts: "22,80,443,8080"
    iac-aws:applicationPort: "8080"
    iac-aws:autoScalingCooldown: "60"
    iac-aws:autoScalingDesiredCapacity: "1"
    iac-aws:autoScalingGroupName: webAppAutoScalingGroup
    iac-aws:autoScalingMaxSize: "3"
    iac-aws:autoScalingMinSize: "1"
    iac-aws:bits_for_each_subnet: "24"
    iac-aws:cloudWatchAgentPolicyAttachmentName: "cloudWatchAgentPolicyAttachment"
    iac-aws:cloudWatchAgentServerPolicyName: "CloudWatchAgentServerPolicy"
    iac-aws:dbInstanceIdentifier: csye6225
    # We don't store password in plaintext in yaml.
    # Use `pulumi config set --secret iac-aws:dbPassword YOUR_PASSWORD` in the CLI to set it.
    iac-aws:dbName: csye6225
    iac-aws:dbParameterGroupName: customdb-parameter-group
    iac-aws:dbPassword: 
    iac-aws:dbPort: "5432"
    iac-aws:dbSecurityGroupName: databaseSecurityGroup
    iac-aws:dbSubnetGroupName: private_subnet_for_rds
    iac-aws:dbUser: csye6225
    iac-aws:deleteOnTermination: "true"
    iac-aws:disableApiTermination: "false"
    iac-aws:domainName: "demo.nikhilkarukonda.me"
    iac-aws:dynamoDBTableName: "Webapp_Mail_Tracker"
    iac-aws:ec2IAMRoleSNSPolicyARN: "arn:aws:iam::aws:policy/AmazonSNSFullAccess"
    iac-aws:ec2Name: EC2DemoRDS
    iac-aws:ec2RoleName: "ec2Role"
    iac-aws:emailDomainName: "nikhilkarukonda.me"
    iac-aws:envType: pulumi
    iac-aws:gcpBucketName: assignments_bucket
    iac-aws:gcpProjectID: 
    iac-aws:gcpRegion: us-east1
    iac-aws:gcpServiceAccountRolePermissions: "roles/storage.admin"
    iac-aws:hostedZoneId: 
    iac-aws:imageId: 
    iac-aws:instanceProfileName: "instanceProfile"
    iac-aws:instanceType: t2.micro
    iac-aws:internet_gateway_attachment_name: custom-gw-attachment
    iac-aws:internet_gateway_name: custom-gw
    iac-aws:keyName:
    iac-aws:lambdaFilePath: "../path_to_lambda_code/"
    iac-aws:lambdaIAMRoleCloudwatchPolicyARN: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
    iac-aws:lambdaIAMRoleDynamoDBPolicyARN: "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
    iac-aws:launchConfigurationName: asg_launch_config
    iac-aws:loadBalancerAllowedIngressPorts: "80,443"
    iac-aws:loadBalancerSecurityGroupName: webAppLoadBalancerSecurityGroup
    iac-aws:max_availability_zones: "3"
    iac-aws:multiAZDeployment: "false"
    iac-aws:private_route_table_name: private-route-table
    iac-aws:private_route_table_subnets_association_prefix: private-rt-assoc
    iac-aws:private_subnets_prefix: private-subnet
    iac-aws:public_destination_cidr: 0.0.0.0/0
    iac-aws:public_route_name: public-route
    iac-aws:public_route_table_name: public-route-table
    iac-aws:public_route_table_subnets_association_prefix: public-rt-assoc
    iac-aws:public_subnets_prefix: public-subnet
    iac-aws:route53ARecordName: route53ARecordName
    iac-aws:securityGroupDescription: Application security group
    iac-aws:securityGroupName: appSecurityGroup
    iac-aws:shutdownBehavior: stop
    iac-aws:snsTopicName: "WebappSNSTopic"
    iac-aws:ttl: "60"
    iac-aws:volumeSize: "25"
    iac-aws:volumeType: gp2
    iac-aws:vpc_cidr: 10.0.0.0/16
    iac-aws:vpc_instance_tenancy: default
    iac-aws:vpc_name: custom-vpc
    iac-aws:SSLCertificateARN:
```
