import React, { ReactNode } from 'react';
export type HeroActions = {
    children: ReactNode;
};
export declare const HeroActions: React.FC<HeroActions>;
export interface HeroButton {
    children?: ReactNode;
    handler?: () => void;
}
export declare const HeroPrimaryButton: React.FC<HeroButton>;
export declare const HeroSecondaryButton: React.FC<HeroButton>;
