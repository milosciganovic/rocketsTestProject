import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const NoItems = () => {
    return (
        <Container>
            <NoItemsLabel>List is empty 🧐</NoItemsLabel>
        </Container>
    );
};

export default NoItems;

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const NoItemsLabel = styled(Text)`
    color: ${props => props.theme.textColorPrimary}
    font-size: ${props => props.theme.textMedium}
    font-weight: bold;
`