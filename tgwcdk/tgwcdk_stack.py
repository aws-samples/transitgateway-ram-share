from constructs import Construct
from aws_cdk import (
    Stack,
    aws_ec2 as ec2,
    aws_ram as ram
)

import aws_cdk as cdk
import os


class TgwcdkStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        # Creating Transit Gateway in the Central Account

        cfn_transit_gateway = ec2.CfnTransitGateway(self, "Transit-Gateway-Demo", 
        amazon_side_asn=None,
        auto_accept_shared_attachments="enable",
        description="This is a test transit gateway",
        tags=[cdk.CfnTag(
            key="Name",
            value="Transit-Gateway-Demo"
        )],
        )
       
        #Creating a Resource Share in AWS Resource Access Manager in the Central Account

        cfn_resource_share = ram.CfnResourceShare(self, "TGW-RAM-Share",
        name="transitgateway-resource-share",
        # the properties below are optional
        allow_external_principals=False,
        principals=[os.environ.get('domain_account')], #domain_account is the AWS account ID that is part of the same organisation, the central account is also part of.
        resource_arns= ['arn:aws:ec2:' + os.environ.get('central_region') + ':' + os.environ.get('central_account') + ':transit-gateway/' + cfn_transit_gateway.attr_id ], #Passing the Transit Gateway ARN 
        tags=[cdk.CfnTag(
            key="Name",
            value="TestDemoRecourceShare"
        )]
        )

        cfn_resource_share.add_dependency(cfn_transit_gateway) #Ensuring AWS RAM Resource share is only created after the creation of Transit Gateway.

        #Creating a Transit Gateway VPC Attachment in the Central Region.

        cfn_transit_gateway_vpc_attachment = ec2.CfnTransitGatewayVpcAttachment(self, "MyCfnTransitGatewayVpcAttachment", 
        subnet_ids=os.environ.get('central_subnets').split(','), #Provided central VPC subnets as env variable.
        transit_gateway_id=cfn_transit_gateway.attr_id, 
        vpc_id=os.environ.get('central_vpc') #Provided central VPC as env variable.
        )

        cfn_transit_gateway_vpc_attachment.add_dependency(cfn_resource_share) #Ensuring VPC attachment is only made after Resource share process has been completed.
          
          
        
        

        
