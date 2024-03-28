import React from 'react';
import { AriaRadioProps } from 'react-aria';
import type { DescriptionSeverity } from '../types';
export interface RadioProps extends AriaRadioProps {
    description?: string;
    descriptionSeverity?: DescriptionSeverity;
    suffix?: string;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
