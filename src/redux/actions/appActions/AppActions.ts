import { appConfig } from "../../../configs/AppConfig";
import { Theme, ThemeIds } from "../../../entities/ThemeEntity";

// Actions
export const SWITCH_THEME = "SWITCH_THEME";

const { lightThemeId, darkThemeId } = appConfig.defaultTheme;

// Interfaces 
export interface SwitchTheme {
    type: typeof SWITCH_THEME;
    activeTheme: Theme
    activeThemeId: ThemeIds
};

// Helpers
export type AppDispatchTypes = SwitchTheme;