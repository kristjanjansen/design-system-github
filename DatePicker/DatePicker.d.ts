import React, { ReactNode } from 'react';
import { AriaDatePickerProps } from 'react-aria';
import { DateValue } from '@react-types/calendar';
export interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    className?: string;
    icon?: ReactNode;
    gaName?: string;
}
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLButtonElement>>;
export default DatePicker;
