import { CfnResource } from 'aws-cdk-lib';
import { NagPackSuppression, NagPackSuppressionAppliesTo } from '../models/nag-suppression';
interface NagCfnMetadata {
    rules_to_suppress: NagCfnSuppression[];
}
interface NagCfnSuppression extends Omit<NagPackSuppression, 'appliesTo'> {
    applies_to?: NagPackSuppressionAppliesTo[];
    is_reason_encoded?: boolean;
}
export declare class NagSuppressionHelper {
    static toCfnFormat(suppression: NagPackSuppression): NagCfnSuppression;
    static toApiFormat(suppression: NagCfnSuppression): NagPackSuppression;
    static addRulesToMetadata(metadata: NagCfnMetadata, rules: NagPackSuppression[]): NagCfnMetadata;
    static getSuppressions(node: CfnResource): NagPackSuppression[];
    static assertSuppressionsAreValid(id: string, suppressions: NagPackSuppression[]): void;
    static doesApply(suppression: NagPackSuppression, ruleId: string, findingId: string): boolean;
    private static getSuppressionFormatError;
    private static toRegEx;
}
export {};
