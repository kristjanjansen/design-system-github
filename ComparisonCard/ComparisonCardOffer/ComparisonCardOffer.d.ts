import React from 'react';
export interface ComparisonCardOfferProps {
    type: string;
    title?: string;
    description?: string;
    tooltiptrigger?: React.ReactNode;
    infoHint?: string;
}
export declare const ComparisonCardOffer: React.FC<ComparisonCardOfferProps>;
