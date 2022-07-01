import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { describeTicket } from './ticket-operations';

const TicketDetailsModal = ({ 
    ticketId, 
    isOpen, 
    onClose 
}) => {
    const [ticket, setTicket] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const ticketResponse = await describeTicket(ticketId);
            setTicket(ticketResponse);
        };

        fetchData();
    }, [ticketId]);

    return (
        <Modal isOpen = {isOpen} style={{}}>
            <ul>
                <li>{ticket.userId}</li>
                <li>{ticket.content}</li>
                <li>{ticket.createdAt}</li>
            </ul>

            <button onClick={onClose}>
                Close
            </button>
        </Modal>
    );
}

export default TicketDetailsModal;