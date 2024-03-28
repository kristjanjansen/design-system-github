import React from 'react';
import { AriaSliderProps } from 'react-aria';
export interface InputSliderProps extends AriaSliderProps {
    className?: string;
    formatOptions?: Intl.NumberFormatOptions;
    showOutput?: boolean;
}
declare const InputSlider: (props: InputSliderProps) => React.JSX.Element;
export default InputSlider;
