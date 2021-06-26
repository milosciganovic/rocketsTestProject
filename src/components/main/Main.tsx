import React, { FunctionComponent } from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import { RootStackNav } from '../../screens';
import useSavedNavigationState, { navigationRef } from '../../functions/core/navigation';
import { useDispatch, useSelector } from "react-redux";
import { appConfig } from '../../configs/AppConfig';
import { RootStoreType } from '../../redux/store';
import { switchTheme } from '../../redux/actions/appActions/AppActionTypes';
import { getCurrentTheme } from '../../functions/core/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

/**
 * Main component is used just once from App component.
 */
const Main: FunctionComponent = () => {
    const { isNavStateReady, navState, saveNavState } = useSavedNavigationState();

    const dispatch = useDispatch();
    const { activeThemeId, activeTheme } = useSelector((state: RootStoreType) => state.app)

    const saveThemeToState = async () => {
        const theme = await getCurrentTheme();

        if (theme) {
            dispatch(switchTheme(theme.theme, theme.currentThemeId));
        };
    };

    if (!isNavStateReady || !activeThemeId && !activeTheme) {
        saveThemeToState()

        return (
            <StatusBarContainer>
                <StatusBar barStyle="light-content" translucent={false} backgroundColor="#000000" animated={true} />
            </StatusBarContainer>
        );
    } else {
        setTimeout(() => {
            RNBootSplash.hide()
        }, appConfig.splashScreenDurationMillis);
    };



    return (
        <ThemeProvider theme={activeTheme}>
            <AppContainer>
                <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} translucent={false} animated={true} />
                <NavigationContainer
                    ref={navigationRef}
                    initialState={navState}
                    onStateChange={state => saveNavState(state)}
                >
                    <RootStackNav />
                </NavigationContainer>
            </AppContainer>
        </ThemeProvider>
    );
};

export default Main;

const StatusBarContainer = styled(View)`
    flex: 1;
    background-color: transparent; 
`
const AppContainer = styled(View)`
    flex: 1
`