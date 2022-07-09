import axios from 'axios';
import {API_ENDPOINT} from '../constants';

export const describeTicket = async (ticketId) => {
    const response = await axios.get(`${API_ENDPOINT}/ticket/${ticketId}`);
    return response.data;
};

export const describeUser = async (id) => {
    const response = await axios.get(`${API_ENDPOINT}/user/describe`, id);

    return response.data;
};

export const createTicket = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/ticket/create`, body);

    return response.data;
};

export const createComment = async (body) => {
    const response = await axios.post(`${API_ENDPOINT}/comment/create`, body);

    return response.data;
};
