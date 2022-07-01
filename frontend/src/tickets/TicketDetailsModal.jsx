import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { describeTicket } from './ticket-operations';

const TicketDetailsModal = () => {
    const [ticket, setTicket] = useState({});
    const { ticketId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const ticketResponse = await describeTicket(ticketId);
            setTicket(ticketResponse);
        };

        fetchData();
    }, [ticketId]);

    return (
        <div>
            <ul>
                <li>{ticket.userId}</li>
                <li>{ticket.content}</li>
                <li>{ticket.createdAt}</li>
            </ul>
        </div>
    );
}

export default TicketDetailsModal;