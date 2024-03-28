export type MarginValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
export type SpacingKey = 'bp-xsmall' | 'bp-small' | 'bp-medium' | 'bp-large';
export declare const spacingValues: Record<SpacingKey, number>;
export interface MarginProps {
    mt?: MarginValue;
    mb?: MarginValue;
    my?: MarginValue;
}
export type DescriptionSeverity = 'regular' | 'warning';
