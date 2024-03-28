import React, { MutableRefObject } from 'react';
import { AriaButtonProps } from 'react-aria';
interface DateFieldButtonProps extends AriaButtonProps {
    buttonRef?: MutableRefObject<HTMLButtonElement>;
    calendarOpen: boolean;
    gaName?: string;
}
declare const DateFieldButton: (props: DateFieldButtonProps) => React.JSX.Element;
export default DateFieldButton;
