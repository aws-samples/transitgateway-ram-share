#!/usr/bin/env python3

import os
import aws_cdk as cdk

from tgwcdk.tgwcdk_stack import TgwcdkStack

#Make sure to replace the below variables with the correct values.
os.environ['central_account'] = 'xxxxxxxxxxx' #AWS Account ID of Central Account in which you need the Transit Gateway created.
os.environ['domain_account'] = 'xxxxxxxxxxx'  #AWS Account ID of Domain Account to which you want to share the Transit Gateway.
os.environ['central_region'] = 'xx-xx-x'      #AWS Region used for the Central Account

#Below variables are used for Transit Gateway VPC attachment. Replace  with correct values.
os.environ['central_vpc'] = 'vpc-xxxxxxxxxxxx'
os.environ['central_subnets'] = 'subnet-1,subnet-2,subnet-3'

app = cdk.App()

TgwcdkStack(app, "TgwcdkStack",
    # If you don't specify 'env', this stack will be environment-agnostic.
    # Account/Region-dependent features and context lookups will not work,
    # but a single synthesized template can be deployed anywhere.

    # Uncomment the next line to specialize this stack for the AWS Account
    # and Region that are implied by the current CLI configuration.

    #env=cdk.Environment(account=os.getenv('CDK_DEFAULT_ACCOUNT'), region=os.getenv('CDK_DEFAULT_REGION')),

    # Uncomment the next line if you know exactly what Account and Region you
    # want to deploy the stack to. */
    #env=cdk.Environment(account='1234567891', region='eu-west-1'),

    # For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
    
    )

app.synth()

