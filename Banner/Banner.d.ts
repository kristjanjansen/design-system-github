import React, { ReactNode } from 'react';
export interface BannerProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    inverted?: boolean;
    children?: ReactNode;
}
export declare const Banner: React.FC<BannerProps>;
