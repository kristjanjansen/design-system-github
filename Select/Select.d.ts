import React from 'react';
import { AriaSelectOptions } from 'react-aria';
import type { CollectionChildren } from '@react-types/shared';
import type { DescriptionSeverity } from '../types';
export interface SelectProps extends Omit<AriaSelectOptions<object>, 'errorMessage'> {
    children?: CollectionChildren<object>;
    errorMessage?: string;
    descriptionSeverity?: DescriptionSeverity;
    labelSuffix?: string;
    tooltipTrigger?: React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement>>;
export default Select;
