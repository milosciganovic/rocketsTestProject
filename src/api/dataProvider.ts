// import storage from '../functions/storage';
import axios, { Method, } from 'axios';

const dataProvider = async (api: string, method: Method, body?: object) => {
    let header: Header = { 'Content-Type': 'application/json' };

    return await axios({
        method: method,
        url: api,
        headers: header,
        data: body
    });
};


export default dataProvider;

type Header = {
    "Content-Type": string;
    "Authorization"?: string;
}
