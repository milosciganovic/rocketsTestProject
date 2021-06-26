import CrewMemberEntity from "../../../entities/CrewMemberEntity";
import RocketEntity from "../../../entities/RocketEntity";

// Actions
export const GET_ROCKET_DATA = "GET_DATA";
export const GET_CREW_MEMBERS_DATA = "GET_CREW_MEMBERS_DATA";
export const SET_CREW_DATA_LOADING = "SET_CREW_DATA_LOADING";
export const SET_CREW_DATA_ERROR = "SET_ERROR";
export const SET_ROCKET_DATA_LOADING = "SET_ROCKET_DATA_LOADING";
export const SET_ROCKET_DATA_ERROR = "SET_ROCKET_DATA_ERROR";

// Interfaces 
export interface GetRocketData {
    type: typeof GET_ROCKET_DATA;
    data: RocketEntity[]
}

export interface GetCrewMembersData {
    type: typeof GET_CREW_MEMBERS_DATA;
    data: CrewMemberEntity[]
}

export interface SetRocketDataLoading {
    type: typeof SET_ROCKET_DATA_LOADING;
}
export interface SetRocketDataError {
    type: typeof SET_ROCKET_DATA_ERROR;
    error: string
};

export interface SetCrewDataLoading {
    type: typeof SET_CREW_DATA_LOADING;
}
export interface SetCrewDataError {
    type: typeof SET_CREW_DATA_ERROR;
    error: string
};


// Helpers
export type DataDispatchTypes =
    GetRocketData |
    GetCrewMembersData |
    SetRocketDataLoading |
    SetRocketDataError |
    SetCrewDataError |
    SetCrewDataLoading