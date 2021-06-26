import CrewMemberEntity from "../../../entities/CrewMemberEntity";
import RocketEntity from "../../../entities/RocketEntity";
import {
    DataDispatchTypes,
    SET_ROCKET_DATA_LOADING,
    SET_CREW_DATA_LOADING,
    GET_ROCKET_DATA,
    SET_ROCKET_DATA_ERROR,
    SET_CREW_DATA_ERROR,
    GET_CREW_MEMBERS_DATA
} from "../../actions/dataActions/DataActions";

export interface DataState {
    rockets: RocketEntity[] | null;
    rocketsDataLoading: boolean;
    rocketsDataError: string;
    crew: CrewMemberEntity[] | null;
    crewDataLoading: boolean;
    crewDataError: string;
};

const defaultState: DataState = {
    rockets: null,
    crew: null,
    rocketsDataLoading: false,
    rocketsDataError: '',
    crewDataLoading: false,
    crewDataError: ''
}

const appReducer = (state = defaultState, action: DataDispatchTypes): DataState => {
    switch (action.type) {
        case GET_ROCKET_DATA:
            return {
                ...state,
                rockets: action.data,
                rocketsDataLoading: false,
            }
        case GET_CREW_MEMBERS_DATA:
            return {
                ...state,
                crew: action.data,
                crewDataLoading: false,
            }
        case SET_CREW_DATA_ERROR:
            return {
                ...state,
                crew: null,
                crewDataLoading: false,
                crewDataError: action.error
            }
        case SET_ROCKET_DATA_ERROR:
            return {
                ...state,
                rockets: null,
                rocketsDataLoading: false,
                rocketsDataError: action.error
            }
        case SET_ROCKET_DATA_LOADING:
            return {
                ...state,
                rocketsDataLoading: true
            }
        case SET_CREW_DATA_LOADING:
            return {
                ...state,
                crewDataLoading: true
            }
        default: return state;
    };
};

export default appReducer;