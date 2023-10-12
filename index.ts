import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import * as ip from "ip";
const config = new pulumi.Config("iac-aws");

console.log(config);

// Extracting values from the YAML config
const vpcName = config.require("vpc_name");
const vpcCidr = config.require("vpc_cidr");
const vpcInstanceTenancy = config.require("vpc_instance_tenancy");
const internetGatewayName = config.require("internet_gateway_name");
const internetGatewayAttachmentName = config.require("internet_gateway_attachment_name");
const publicRouteTableName = config.require("public_route_table_name");
const privateRouteTableName = config.require("private_route_table_name");
const maxAvailabilityZones = config.getNumber("max_availability_zones");
const bitsForEachSubnet = config.getNumber("bits_for_each_subnet");
const publicRouteName = config.require("public_route_name");
const publicDestinationCidr = config.require("public_destination_cidr");
const publicSubnetsPrefix = config.require("public_subnets_prefix");
const privateSubnetsPrefix = config.require("private_subnets_prefix");
const publicRouteTableSubnetsAssociationPrefix = config.require("public_route_table_subnets_association_prefix");
const privateRouteTableSubnetsAssociationPrefix = config.require("private_route_table_subnets_association_prefix");

// Create VPC
const vpc = new aws.ec2.Vpc(vpcName, {
    cidrBlock: vpcCidr,
    instanceTenancy: vpcInstanceTenancy,
    tags: {
        Name: vpcName,
    },
});