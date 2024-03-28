import React from 'react';
import { AriaCalendarProps } from 'react-aria';
import type { DateValue } from '@react-types/calendar';
export interface CalendarProps extends AriaCalendarProps<DateValue> {
    className?: string;
}
declare const Calendar: (props: CalendarProps) => React.JSX.Element;
export default Calendar;
