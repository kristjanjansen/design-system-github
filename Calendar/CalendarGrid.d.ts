import React from 'react';
import { AriaCalendarGridProps } from 'react-aria';
import { CalendarState } from 'react-stately';
interface CalendarGridProps extends AriaCalendarGridProps {
    state: CalendarState;
    gaName?: string;
}
declare const CalendarGrid: ({ state, gaName, ...props }: CalendarGridProps) => React.JSX.Element;
export default CalendarGrid;
