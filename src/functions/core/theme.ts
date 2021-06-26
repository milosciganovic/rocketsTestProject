import { appConfig } from "../../configs/AppConfig";
import { ThemeIds } from "../../entities/ThemeEntity";
import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";
import { getAsyncStorageItem, setAsyncStorageItem } from "./asyncStorage"

const { lightThemeId, darkThemeId } = appConfig.defaultTheme;

export const initTheme = async () => {
    const currentThemeId = await getAsyncStorageItem("CURRENT_THEME_ID");

    if (!currentThemeId) {
        try {
            await setAsyncStorageItem("CURRENT_THEME_ID", lightThemeId);
        } catch (e) {
            console.log(e, 'e')
        };
    }
};

export const getCurrentTheme = async () => {
    const currentThemeId = await getAsyncStorageItem("CURRENT_THEME_ID");

    if (currentThemeId) {
        const theme = getThemeFromId(currentThemeId);

        return {
            currentThemeId,
            theme
        };
    };

    return null;
}

const getThemeFromId = (id: ThemeIds) => {
    return id === lightThemeId ? lightTheme : darkTheme;
}

export const themeSwitcher = async () => {
    const currentThemeId = await getAsyncStorageItem("CURRENT_THEME_ID");

    if (currentThemeId === lightThemeId) {
        setAsyncStorageItem("CURRENT_THEME_ID", darkThemeId);

        return {
            activeTheme: getThemeFromId(darkThemeId),
            themeId: darkThemeId
        };
    } else {
        setAsyncStorageItem("CURRENT_THEME_ID", lightThemeId);
        return {
            activeTheme: getThemeFromId(lightThemeId),
            themeId: lightThemeId
        };
    }
}