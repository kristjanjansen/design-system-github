import React from 'react';
export interface CardContentProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    gap?: 'small' | 'medium';
}
export declare const CardContent: React.FC<CardContentProps>;
