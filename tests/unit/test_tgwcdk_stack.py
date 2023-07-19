import aws_cdk as core
import aws_cdk.assertions as assertions

from tgwcdk.tgwcdk_stack import TgwcdkStack

# example tests. To run these tests, uncomment this file along with the example
# resource in tgwcdk/tgwcdk_stack.py
def test_sqs_queue_created():
    app = core.App()
    stack = TgwcdkStack(app, "tgwcdk")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
