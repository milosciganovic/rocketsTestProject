import React, { useState, useEffect, useCallback } from 'react';
import { Platform, Linking } from 'react-native';
import { NavigationState, ParamListBase, NavigationContainerRef } from '@react-navigation/native';
import { getAsyncStorageItem, setAsyncStorageItem, removeAsyncStorageItem } from './asyncStorage';
import { appConfig } from '../../configs/AppConfig';

/**
 * Use this object to access navigation from anywhere.
 */
export const navigationRef = React.createRef<NavigationContainerRef>();

const useSavedNavigationState = () => {
    const [navState, setNavState] = useState<NavigationState>();
    const [isNavStateReady, setIsNavStateReady] = useState<boolean>(false);

    // Read navigation state from async storage
    useEffect(() => {
        const restoreState = async () => {
            try {
                const initialUrl = await Linking.getInitialURL();

                if (
                    Platform.OS !== 'web'
                    && initialUrl == null
                    && appConfig.rememberNavigationState
                ) {
                    // Only restore state if there's no deep link and we're not on web
                    const savedState = await getAsyncStorageItem('NAVIGATION_STATE');
                    const oldState = savedState ? savedState : undefined;

                    if (oldState !== undefined) {
                        setNavState(oldState);
                    }
                }
            } finally {
                setTimeout(() => {
                    setIsNavStateReady(true);
                }, 0);
            }
        };

        if (!isNavStateReady) {
            restoreState();
        }
    }, []); // isNavStateReady

    // Save navigation state
    const saveNavState = useCallback((navState: NavigationState | undefined) => {
        setAsyncStorageItem('NAVIGATION_STATE', navState);
    }, []);

    // Delete navigation state
    const deleteNavState = useCallback(() => {
        removeAsyncStorageItem('NAVIGATION_STATE');
    }, []);

    return {
        navState,
        saveNavState,
        deleteNavState,
        isNavStateReady,
    };
}

export default useSavedNavigationState;

export type SubNavigator<T extends ParamListBase> = {
    [K in keyof T]: { screen: K; params?: T[K] };
}[keyof T];