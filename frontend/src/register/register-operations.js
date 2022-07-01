import axios from 'axios';
import {API_ENDPOINT} from '../constants';

export const register = async () => {
    const response = await axios.post(`${API_ENDPOINT}/user/register`);
    return response.data;
};