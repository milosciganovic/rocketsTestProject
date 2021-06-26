import { Dispatch } from 'redux';
import { AppDispatchTypes, SWITCH_THEME } from './AppActions';
import { Theme, ThemeIds } from '../../../entities/ThemeEntity';

export const switchTheme = (theme: Theme, themeId: ThemeIds) => (dispatch: Dispatch<AppDispatchTypes>) => {
    return dispatch({
        type: SWITCH_THEME,
        activeTheme: theme,
        activeThemeId: themeId
    });
};

