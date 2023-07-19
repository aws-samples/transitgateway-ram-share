/**
 * Turns a CloudFormation reference object into a flat string for easy suppression
 * @param node The reference object
 * @returns Flattened string
 */
export declare const flattenCfnReference: (reference: unknown) => string;
