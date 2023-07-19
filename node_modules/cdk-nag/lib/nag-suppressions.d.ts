import { Stack } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { NagPackSuppression } from './models/nag-suppression';
/**
 * Helper class with methods to add cdk-nag suppressions to cdk resources
 */
export declare class NagSuppressions {
    /**
     * Apply cdk-nag suppressions to a Stack and optionally nested stacks
     * @param stack The Stack to apply the suppression to
     * @param suppressions A list of suppressions to apply to the stack
     * @param applyToNestedStacks Apply the suppressions to children stacks (default:false)
     */
    static addStackSuppressions(stack: Stack, suppressions: NagPackSuppression[], applyToNestedStacks?: boolean): void;
    /**
     * Add cdk-nag suppressions to a CfnResource and optionally its children
     * @param construct The IConstruct(s) to apply the suppression to
     * @param suppressions A list of suppressions to apply to the resource
     * @param applyToChildren Apply the suppressions to children CfnResources  (default:false)
     */
    static addResourceSuppressions(construct: IConstruct | IConstruct[], suppressions: NagPackSuppression[], applyToChildren?: boolean): void;
    /**
     * Add cdk-nag suppressions to a CfnResource and optionally its children via its path
     * @param stack The Stack the construct belongs to
     * @param path The path(s) to the construct in the provided stack
     * @param suppressions A list of suppressions to apply to the resource
     * @param applyToChildren Apply the suppressions to children CfnResources  (default:false)
     */
    static addResourceSuppressionsByPath(stack: Stack, path: string | string[], suppressions: NagPackSuppression[], applyToChildren?: boolean): void;
}
