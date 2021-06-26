import React from 'react';
import { Image, TouchableOpacity } from 'react-native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigator, BottomTabNavScreens } from './bottomTabNavigator';
import CrewMemberScreen from './CrewMemberScreen';
import { useSelector } from "react-redux";
import { RootStoreType } from '../redux/store';
import { appConfig } from '../configs/AppConfig';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import CrewMemberEntity from '../entities/CrewMemberEntity';
import SettingsScreen from './SettingsScreen';

export type RootStackNavScreens = {
    'BottomTabNavigator': BottomTabNavScreens;
    'CrewMemberScreen': { item: CrewMemberEntity };
    'SettingsScreen': undefined;
};

const Stack = createStackNavigator<RootStackNavScreens>();

/**
 * Root navigator.
 */
export function RootStackNav() {

    const { activeThemeId, activeTheme } = useSelector((state: RootStoreType) => state.app);
    const { lightThemeId } = appConfig.defaultTheme

    const headerImage = activeThemeId === lightThemeId
        ? require("../assets/logo_light.png")
        : require('../assets/logo_dark.png')

    const headerOptions: StackNavigationOptions = {
        headerTintColor: activeTheme?.colorPrimary,
        headerStyle: {
            backgroundColor: activeTheme?.backgroundSecondary,
        },
    };

    return (
        <Stack.Navigator
            mode='modal'
        >
            <Stack.Screen
                name='BottomTabNavigator'
                options={({ navigation }) => ({
                    ...headerOptions,
                    headerTitle: () => (<LogoImage source={headerImage} />),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
                            <Icon name={"settings"} />
                        </TouchableOpacity>
                    ),
                })}
                component={BottomTabNavigator}
            />

            <Stack.Screen
                name='CrewMemberScreen'
                options={headerOptions}
                component={CrewMemberScreen}
            />

            <Stack.Screen
                name='SettingsScreen'
                options={{
                    ...
                    headerOptions,
                    title: "Settings"
                }}
                component={SettingsScreen}
            />
        </Stack.Navigator>
    );
};

const LogoImage = styled(Image)`
    width: 160px;
    height: 26px;
`
const Icon = styled(MaterialIcon)`
    font-size: 22px;
    margin-right: ${props => props.theme.spacingMedium};
    color: silver
`