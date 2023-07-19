import { IConstruct } from 'constructs';
import { NagPack, NagPackProps } from '../nag-pack';
/**
 * Check Best practices based on AWS Solutions Security Matrix
 *
 */
export declare class AwsSolutionsChecks extends NagPack {
    constructor(props?: NagPackProps);
    visit(node: IConstruct): void;
    /**
     * Check Compute Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkCompute;
    /**
     * Check Storage Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkStorage;
    /**
     * Check Database Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkDatabases;
    /**
     * Check Network and Delivery Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkNetworkDelivery;
    /**
     * Check Management and Governance Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkManagementGovernance;
    /**
     * Check Machine Learning Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkMachineLearning;
    /**
     * Check Analytics Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkAnalytics;
    /**
     * Check Security and Compliance Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkSecurityCompliance;
    /**
     * Check Serverless Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkServerless;
    /**
     * Check Application Integration Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkApplicationIntegration;
    /**
     * Check Media Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkMediaServices;
    /**
     * Check Developer Tools Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkDeveloperTools;
    /**
     * Check Lambda Services
     * @param node the CfnResource to check
     * @param ignores list of ignores for the resource
     */
    private checkLambda;
}
