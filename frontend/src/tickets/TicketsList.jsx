import React, { useState } from 'react';
import TicketDetailsModal from './TicketDetailsModal';
import logout from '../utils/logout';

const TicketsList = () => {
    const ticketId = "62b6900ff227440cb5495751";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h3>Hello</h3>

            <button onClick = {() => setIsOpen(true)}>
                See ticket
            </button>

            <TicketDetailsModal 
                ticketId = {ticketId}
                onClose = {() => setIsOpen(false)}
                isOpen = {isOpen}
            />
            
            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default TicketsList;