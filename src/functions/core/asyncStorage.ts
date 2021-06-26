import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationState } from '@react-navigation/native';
import { appConfig } from '../../configs/AppConfig';
import { ThemeIds } from '../../entities/ThemeEntity';

type AsyncStorageVariables = {
    'NAVIGATION_STATE': NavigationState | undefined;
    'CURRENT_THEME_ID': ThemeIds;
};

type AsyncStorageVariableKey = keyof AsyncStorageVariables;

/**
 * Set item.
 */
export async function setAsyncStorageItem<T extends AsyncStorageVariableKey>(
    key: T,
    value: AsyncStorageVariables[T] | null
): Promise<void> {
    try {
        await AsyncStorage.setItem(`${appConfig.asyncStoragePrefix}_${key}`, JSON.stringify(value));
    } catch (e) { }
}

/**
 * Get item.
 */
export async function getAsyncStorageItem<T extends AsyncStorageVariableKey>(
    key: T
): Promise<AsyncStorageVariables[T] | null> {
    let value: AsyncStorageVariables[T] | null = null;

    try {
        const valueString = await AsyncStorage.getItem(`${appConfig.asyncStoragePrefix}_${key}`);
        value = valueString ? JSON.parse(valueString) : null;
    } catch (e) { }

    return value;
}

/**
 * Remove item.
 */
export async function removeAsyncStorageItem<T extends AsyncStorageVariableKey>(
    key: T
): Promise<void> {
    try {
        await AsyncStorage.removeItem(`${appConfig.asyncStoragePrefix}_${key}`);
    } catch (e) { }
}

/**
 * Get all keys.
 */
export async function getAllAsyncStorageKeys(): Promise<AsyncStorageVariableKey[]> {
    let allKeys = [];

    try {
        allKeys = await AsyncStorage.getAllKeys() as any[];
    } catch (e) { }

    return allKeys;
}

/**
 * Delete all values.
 */
export async function clearAsyncStorage(): Promise<void> {
    try {
        await AsyncStorage.clear();
    } catch (e) { }
}