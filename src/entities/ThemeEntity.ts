import { lightTheme } from "../theme/lightTheme";
import { appConfig } from "../configs/AppConfig";

const { darkThemeId, lightThemeId } = appConfig.defaultTheme

export type Theme = typeof lightTheme
export type ThemeIds = typeof lightThemeId | typeof darkThemeId