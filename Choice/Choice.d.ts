import React from 'react';
import { AriaRadioProps } from 'react-aria';
export interface ChoiceProps extends AriaRadioProps {
    label: string;
    description?: string;
    choiceType?: 'simple' | 'complex';
    layout?: 'row' | 'column';
    suffix?: string;
}
declare const Choice: React.ForwardRefExoticComponent<ChoiceProps & React.RefAttributes<HTMLInputElement>>;
export default Choice;
