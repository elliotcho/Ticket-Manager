import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { describeTicket } from './ticket-operations';

const TicketDetailsModal = (props) => {

    const [ticket, setTicket] = useState({});
    const {ticketId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const ticketResponse = await describeTicket(ticketId);
            setTicket(ticketResponse);
        };


        fetchData();
    }, [ticketId]);


    return (
        <div>
            {JSON.stringify(ticket)}
        </div>
    );
}

export default TicketDetailsModal;