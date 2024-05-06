import React from 'react';
export interface ListItemProps {
    children?: React.ReactNode;
    className?: string;
    dangerouslySetInnerHTML?: any;
}
export declare const ListItem: React.FC<ListItemProps>;
