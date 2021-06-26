import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStoreType } from '../../redux/store';
import styled from 'styled-components';

const Loader = () => {

    const { activeTheme } = useSelector((state: RootStoreType) => state.app);

    return (
        <Container>
            <ActivityIndicator size="large" color={activeTheme?.colorPrimary} />
        </Container>
    )
}

export default Loader;

const Container = styled(View)`
    flex: 1;
    justify-content: center;
`