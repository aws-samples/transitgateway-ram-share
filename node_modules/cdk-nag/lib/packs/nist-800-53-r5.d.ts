import { IConstruct } from 'constructs';
import { NagPack, NagPackProps } from '../nag-pack';
/**
 * Check for NIST 800-53 rev 5 compliance.
 * Based on the NIST 800-53 rev 5 AWS operational best practices: https://docs.aws.amazon.com/config/latest/developerguide/operational-best-practices-for-nist-800-53_rev_5.html
 */
export declare class NIST80053R5Checks extends NagPack {
    constructor(props?: NagPackProps);
    visit(node: IConstruct): void;
    /**
     * Check API Gateway Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkAPIGW;
    /**
     * Check Auto Scaling Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkAutoScaling;
    /**
     * Check CloudTrail Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkCloudTrail;
    /**
     * Check CloudWatch Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkCloudWatch;
    /**
     * Check DMS Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkDMS;
    /**
     * Check DynamoDB Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkDynamoDB;
    /**
     * Check EC2 Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkEC2;
    /**
     * Check ECS Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkECS;
    /**
     * Check EFS Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkEFS;
    /**
     * Check ElastiCache Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkElastiCache;
    /**
     * Check Elastic Beanstalk Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkElasticBeanstalk;
    /**
     * Check Elastic Load Balancer Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkELB;
    /**
     * Check IAM Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkIAM;
    /**
     * Check KMS Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkKMS;
    /**
     * Check Lambda Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkLambda;
    /**
     * Check OpenSearch Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkOpenSearch;
    /**
     * Check RDS Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkRDS;
    /**
     * Check Redshift Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkRedshift;
    /**
     * Check Amazon S3 Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkS3;
    /**
     * Check SageMaker Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkSageMaker;
    /**
     * Check Secrets Manager Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkSecretsManager;
    /**
     * Check Amazon SNS Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkSNS;
    /**
     * Check VPC Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkVPC;
    /**
     * Check WAF Resources
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkWAF;
}
