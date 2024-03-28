import React from 'react';
import { AriaDateFieldProps } from 'react-aria';
import { DateValue } from '@react-types/calendar';
interface DateFieldProps extends AriaDateFieldProps<DateValue> {
    gaName?: string;
}
declare const DateField: (props: DateFieldProps) => React.JSX.Element;
export default DateField;
