import React, { ReactNode } from 'react';
export interface BannerProps {
    title: string;
    description: string;
    icon?: ReactNode;
    inverted?: boolean;
    children?: ReactNode;
}
export declare const Banner: React.FC<BannerProps>;
export type BannerButton = {
    children?: ReactNode;
    handler?: () => void;
    inverted?: boolean;
};
export declare const BannerButton: React.FC<BannerButton>;
