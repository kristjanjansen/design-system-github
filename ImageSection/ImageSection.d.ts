import React, { HTMLAttributes } from 'react';
export interface ImageSectionProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
    children: React.ReactNode;
    direction?: 'row' | 'row-reverse';
    layout?: 'half' | 'imageTwoThirds' | 'contentTwoThirds';
}
declare const ImgColumn: React.FC<{
    children: React.ReactNode;
}>;
declare const ContentColumn: React.FC<{
    children: React.ReactNode;
}>;
interface ImageSectionComponent extends React.FC<ImageSectionProps> {
    ImgColumn: typeof ImgColumn;
    ContentColumn: typeof ContentColumn;
}
declare const ImageSection: ImageSectionComponent;
export default ImageSection;
