// import { ErrorReportChannel } from './errorsConfig';
import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';

export const appConfig = {
  // GENERAL
  appName: 'Rockets test project',
  rememberNavigationState: true,
  splashScreenDurationMillis: 500,
  asyncStoragePrefix: '@ROCKET_TEST_PROJECT',

  // THEMING
  themes: [lightTheme, darkTheme],
  defaultTheme: {
    lightThemeId: '766d73e2-47ac-4ebc-aad5-5019c6d0e282',
    darkThemeId: '403354e0-61ed-48a9-a83b-28427a894659',
  },
} as const;
