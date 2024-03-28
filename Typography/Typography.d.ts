import React from 'react';
import { MarginProps } from '../types';
import { HeadingProps, LabelProps, TextProps } from './types';
export declare const StyledHeading: React.FC<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, HeadingProps & MarginProps>>;
export declare const StyledText: React.FC<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TextProps & MarginProps>>;
export declare const StyledLabel: React.FC<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, LabelProps>>;
export declare const Typography: {
    Heading: React.FC<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, HeadingProps & MarginProps>>;
    Text: React.FC<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TextProps & MarginProps>>;
    Label: React.FC<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, LabelProps>>;
};
