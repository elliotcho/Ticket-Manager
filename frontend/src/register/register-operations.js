import axios from 'axios';
import { API_ENDPOINT } from '../constants';

export const register = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/user/register`, body);
    return response.data;
};