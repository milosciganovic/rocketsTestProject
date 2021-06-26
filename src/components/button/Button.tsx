import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components'

export interface ButtonProps {
    text: string;
    onPress: () => void;
};

const Button = ({ text, onPress }: ButtonProps) => {
    return (
        <Btn onPress={onPress}>
            <BtnText>{text}</BtnText>
        </Btn>
    )
};

export default Button;

const Btn = styled(TouchableOpacity)`
    background: ${props => props.theme.colorPrimary};
    flex: 1;
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    align-self: center
    height: ${props => props.theme.buttonHeight}
`

const BtnText = styled(Text)`
    color: white;
    font-size: ${props => props.theme.textMedium}
    text-align: center;
    flex: 1;
    font-weight: bold;
`