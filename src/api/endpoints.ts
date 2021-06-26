import { API_URL } from '@env';

const endpoints = {
    getRockets: `${API_URL}rockets`,
    getCrewMembers: `${API_URL}crew`,
};

export type EndpointType =
    typeof endpoints.getRockets |
    typeof endpoints.getCrewMembers

export default endpoints;