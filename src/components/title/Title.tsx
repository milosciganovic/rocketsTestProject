import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

export interface TitleProps {
    text: string;
};

const Title = ({ text }: TitleProps) => {
    return (
        <TitleComponent>{text}</TitleComponent>
    );
};

export default Title;

const TitleComponent = styled(Text)`
    font-size: ${props => props.theme.textBig};
    color: ${props => props.theme.textColorPrimary};
    font-weight: bold;
`;
