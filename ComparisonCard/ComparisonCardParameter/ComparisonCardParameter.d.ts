import React from 'react';
export interface ComparisonCardParameterProps {
    type: string;
    title?: string;
    value?: string;
    tooltipTrigger?: React.ReactNode;
}
export declare const ComparisonCardParameter: React.FC<ComparisonCardParameterProps>;
