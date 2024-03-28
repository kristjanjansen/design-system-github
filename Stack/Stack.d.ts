import React from 'react';
interface StackProps {
    direction: Record<string, 'row' | 'column'>;
    spacing: Record<string, number>;
    children: React.ReactNode;
}
export declare const Stack: React.FC<StackProps>;
export {};
