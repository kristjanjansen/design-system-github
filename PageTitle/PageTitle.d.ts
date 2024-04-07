import React from 'react';
import type { Background } from '../types';
export interface PageTitleProps {
    children: React.ReactNode;
    className?: string;
    background?: Background;
}
export declare const PageTitle: ({ children, className, background, ...rest }: PageTitleProps) => React.JSX.Element;
