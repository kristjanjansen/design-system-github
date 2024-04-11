import React, { ReactNode } from 'react';
import { AriaCheckboxProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
export interface CheckboxProps extends AriaCheckboxProps {
    description?: string;
    errorMessage?: string;
    children: ReactNode;
    descriptionSeverity?: DescriptionSeverity;
    suffix?: string;
    linkTitle?: string;
    linkUrl?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
