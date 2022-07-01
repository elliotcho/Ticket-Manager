import axios from 'axios';
import {API_ENDPOINT} from '../constants';

export const loginFunction = async () => {
    const response = await axios.post(`${API_ENDPOINT}/user/login`);
    return response.data;
};