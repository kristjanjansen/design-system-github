import React, { RefObject } from 'react';
import { SliderState } from 'react-stately';
interface SliderThumbProps {
    state: SliderState;
    trackRef: RefObject<Element>;
    index: number;
}
declare const Thumb: (props: SliderThumbProps) => React.JSX.Element;
export default Thumb;
