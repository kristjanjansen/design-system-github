import React, { ReactNode } from 'react';
export interface BannerProps {
    title: string;
    description: string;
    icon: ReactNode;
    button?: {
        text: string;
        handler: () => void;
    };
    inverted?: boolean;
}
export declare const Banner: React.FC<BannerProps>;
