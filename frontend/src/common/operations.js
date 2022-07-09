import axios from 'axios';
import { API_ENDPOINT } from '../constants';

export const describeUser = async (userId) => {
    const response = await axios.get(`${API_ENDPOINT}/user/${userId}`);
    return response.data;
};