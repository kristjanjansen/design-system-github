import React, { ReactNode } from 'react';
import { AriaButtonProps } from 'react-aria';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'alert';
export interface ButtonProps extends AriaButtonProps {
    isIcon?: boolean;
    isFullWidth?: boolean;
    className?: string;
    variant?: Variant;
    inverted?: boolean;
    tooltipLabel?: string;
    tooltipWrapperClassName?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
