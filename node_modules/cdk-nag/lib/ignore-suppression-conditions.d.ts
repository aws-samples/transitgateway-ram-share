import { CfnResource } from 'aws-cdk-lib';
import { NagMessageLevel } from './nag-rules';
/**
 * Information about the NagRule and the relevant NagSuppression for the INagSuppressionIgnore
 * @param resource The resource the suppression is applied to.
 * @param reason The reason given for the suppression.
 * @param ruleId The id of the rule to ignore.
 * @param findingId The id of the finding that is being checked.
 * @param ruleLevel The severity level of the rule.
 */
export interface SuppressionIgnoreInput {
    readonly resource: CfnResource;
    readonly reason: string;
    readonly ruleId: string;
    readonly findingId: string;
    readonly ruleLevel: NagMessageLevel;
}
/**
 * Interface for creating NagSuppression Ignores
 */
export interface INagSuppressionIgnore {
    createMessage(input: SuppressionIgnoreInput): string;
}
/**
 * Ignore the suppression if all of the given INagSuppressionIgnore return a non-empty message
 */
export declare class SuppressionIgnoreAnd implements INagSuppressionIgnore {
    private andSuppressionIgnores;
    constructor(...SuppressionIgnoreAnds: INagSuppressionIgnore[]);
    createMessage(input: SuppressionIgnoreInput): string;
}
/**
 * Ignore the suppression if any of the given INagSuppressionIgnore return a non-empty message
 */
export declare class SuppressionIgnoreOr implements INagSuppressionIgnore {
    private SuppressionIgnoreOrs;
    constructor(...orSuppressionIgnores: INagSuppressionIgnore[]);
    createMessage(input: SuppressionIgnoreInput): string;
}
/**
 * Always ignore the suppression
 */
export declare class SuppressionIgnoreAlways implements INagSuppressionIgnore {
    private triggerMessage;
    constructor(triggerMessage: string);
    createMessage(_input: SuppressionIgnoreInput): string;
}
/**
 * Don't ignore the suppression
 */
export declare class SuppressionIgnoreNever implements INagSuppressionIgnore {
    createMessage(_input: SuppressionIgnoreInput): string;
}
/**
 * Ignore Suppressions for Rules with a NagMessageLevel.ERROR
 */
export declare class SuppressionIgnoreErrors implements INagSuppressionIgnore {
    createMessage(input: SuppressionIgnoreInput): string;
}
