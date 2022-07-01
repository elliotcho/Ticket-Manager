import axios from 'axios';
import {API_ENDPOINT} from '../constants';

export const describeTicket = async (ticketId) => {
    const response = await axios.get(`${API_ENDPOINT}/ticket/${ticketId}`);
    return response.data;
};