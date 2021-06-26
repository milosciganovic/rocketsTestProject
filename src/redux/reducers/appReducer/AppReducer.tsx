import { appConfig } from "../../../configs/AppConfig";
import { Theme, ThemeIds } from "../../../entities/ThemeEntity";
import { AppDispatchTypes, SWITCH_THEME } from "../../actions/appActions/AppActions";

export interface AppState {
    activeThemeId: ThemeIds | null,
    activeTheme: Theme | null
};

const defaultState: AppState = {
    activeThemeId: null,
    activeTheme: null
}

const appReducer = (state = defaultState, action: AppDispatchTypes): AppState => {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                ...state,
                activeTheme: action.activeTheme,
                activeThemeId: action.activeThemeId
            }
        default: return state;
    };
};

export default appReducer;