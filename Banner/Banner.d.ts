import React, { ReactNode } from 'react';
export interface BannerProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    inverted?: boolean;
    children?: ReactNode;
    layout: 'column' | 'row';
}
export declare const Banner: React.FC<BannerProps>;
