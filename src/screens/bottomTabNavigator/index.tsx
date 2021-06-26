import React from 'react';
import { Tab } from '../../components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RocketsScreen from './RocketsScreen';
import CrewMembersScreen from './CrewMembersScreen';
import { useSelector } from 'react-redux';
import { RootStoreType } from '../../redux/store';
import { scale } from 'react-native-size-matters';

export type BottomTabNavScreens = {
    'RocketsScreen': undefined;
    'CrewMembersScreen': undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavScreens>();

export function BottomTabNavigator() {

    const { activeThemeId, activeTheme } = useSelector((state: RootStoreType) => state.app);

    return (
        <BottomTab.Navigator
            tabBarOptions={{
                activeTintColor: '#1FA59A',
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 10,
                    left: scale(30),
                    right: scale(30),
                    backgroundColor: '#1FA59A',
                    borderRadius: 10,
                    height: scale(50),
                    shadowColor: '#1FA59A',
                    shadowOffset: {
                        width: 0,
                        height: 10
                    },
                    shadowRadius: 3.5,
                    elevation: 5
                }
            }}
        >
            <BottomTab.Screen
                name='RocketsScreen'
                component={RocketsScreen}
                options={{
                    tabBarIcon: ({ focused, size: fontSize }) =>
                        tabBarIcon(focused, fontSize, "Rockets", 'rockets')
                }}
            />
            <BottomTab.Screen
                name='CrewMembersScreen'
                component={CrewMembersScreen}
                options={{
                    tabBarIcon: ({ focused, size: fontSize }) =>
                        tabBarIcon(focused, fontSize, "Crew", 'crew')
                }}
            />

        </BottomTab.Navigator >
    );
};

// Helpers 
const tabBarIcon = (focused: boolean, fontSize: number, text: string, tabName: "rockets" | "crew") => (
    <Tab focused={focused} fontSize={fontSize} text={text} tabName={tabName} />
)

