import React, { ReactNode } from 'react';
export interface ComparisonCardPriceProps {
    primary?: boolean;
    primaryTitle?: string;
    primaryPrefix?: string;
    primaryPrice?: string;
    primarySuffix?: string;
    primaryDescription?: string;
    secondary?: boolean;
    secondaryTitle?: string;
    secondaryPrefix?: string;
    secondaryPrice?: string;
    secondarySuffix?: string;
    secondaryDescription?: string;
    tertiary?: boolean;
    tertiaryTitle?: string;
    tertiaryPrefix?: string;
    tertiaryPrice?: string;
    tertiarySuffix?: string;
    tertiaryDescription?: string;
    children?: React.ReactNode;
    notificationTitle?: string;
    notificationDescription?: string;
    tooltiptrigger?: ReactNode;
}
export declare const ComparisonCardPrice: React.FC<ComparisonCardPriceProps>;
