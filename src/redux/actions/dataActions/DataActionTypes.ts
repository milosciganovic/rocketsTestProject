import { Dispatch } from 'redux';
import dataProvider from '../../../api/dataProvider';
import endpoints from '../../../api/endpoints';
import CrewMemberEntity from '../../../entities/CrewMemberEntity';
import RocketEntity from '../../../entities/RocketEntity';
import {
    DataDispatchTypes,
    GET_ROCKET_DATA,
    GET_CREW_MEMBERS_DATA,
    SET_CREW_DATA_ERROR,
    SET_ROCKET_DATA_ERROR,
    SET_ROCKET_DATA_LOADING,
    SET_CREW_DATA_LOADING,
} from './DataActions';

export const getRocketData = () => async (dispatch: Dispatch<DataDispatchTypes>) => {
    dispatch({ type: SET_ROCKET_DATA_LOADING, loading: true });
    const endpoint = endpoints.getRockets;

    try {
        const response = await dataProvider(endpoint, "GET");
        const { data } = response;

        let convertedData: RocketEntity[] = data.map((item: any) => {
            return {
                name: item.name,
                type: item.type,
                active: item.active,
                country: item.country,
                company: item.company,
                description: item.description,
                id: item.id,
                height: item.height.meters,
                mass: item.height.mass,
                image: item.flickr_images[0]
            }
        });

        dispatch({ type: GET_ROCKET_DATA, data: convertedData });

    } catch (e) {
        dispatch({ type: SET_ROCKET_DATA_ERROR, error: e.message });
    }
};

export const getCrewMembersData = () => async (dispatch: Dispatch<DataDispatchTypes>) => {
    dispatch({ type: SET_CREW_DATA_LOADING, loading: true });
    const endpoint = endpoints.getCrewMembers;

    try {
        const response = await dataProvider(endpoint, "GET");
        const { data } = response;

        let convertedData: CrewMemberEntity[] = data.map((item: any) => {
            return {
                name: item.name,
                agency: item.agency,
                image: item.image,
                wikipedia: item.wikipedia,
                launches: item.launches,
                status: item.status,
                id: item.id
            }
        });

        dispatch({ type: GET_CREW_MEMBERS_DATA, data: convertedData });

    } catch (e) {
        dispatch({ type: SET_CREW_DATA_ERROR, error: e.message });
    }
};
