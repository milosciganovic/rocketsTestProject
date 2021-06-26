import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

interface ErrorProps {
    errorText: string;
}

const Error = ({ errorText }: ErrorProps) => {
    return (
        <Container>
            <NoItemsLabel>Ops! Something is wrong 😱</NoItemsLabel>
            <NoItemsLabel>{errorText}</NoItemsLabel>
        </Container>
    );
};

export default Error;

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const NoItemsLabel = styled(Text)`
    color: ${props => props.theme.colorError};
    font-size: ${props => props.theme.textMedium}
    font-weight: bold;
`