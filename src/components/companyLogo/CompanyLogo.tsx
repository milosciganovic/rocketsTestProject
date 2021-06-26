import React from 'react';
import { Avatar } from '../';

export interface CompanyLogoProps {
    size: number;
    width?: number;
    company: CompanyNames;
}

const CompanyLogo = ({ size, company, width }: CompanyLogoProps) => {
    const renderedImage = () => {
        switch (company) {
            case 'SpaceX':
                return require('../../assets/spaceX.png');
            case 'NASA':
                return require('../../assets/nasa.png');
            case 'ESA':
                return require('../../assets/esa.png');
            case 'JAXA':
                return require('../../assets/jaxa.png');
            default:
                return require('../../assets/spaceX.png');
        };
    };

    return (
        <Avatar size={size} width={width} url={renderedImage()} />
    );
};

export default CompanyLogo;

export type CompanyNames = "SpaceX" | "NASA" | "ESA" | "JAXA";