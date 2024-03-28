import React, { HTMLAttributes } from 'react';
export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
    imageUrl: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHandler?: () => void;
}
export declare const Hero: React.FC<HeroProps>;
export default Hero;
