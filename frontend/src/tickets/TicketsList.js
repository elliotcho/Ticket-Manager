import React, { useState } from 'react';
import logout from '../utils/logout'
import TicketDetailsModal from './TicketDetailsModal';

const TicketsList = () => {

    const ticketId = '62a6bcc002428df2566cef61';
    const [isOpen, setIsOpen] = useState(false);


    return(

        <div>

            <h3>Hello World</h3>

            <button onClick = {()=> setIsOpen(true)}>
                See Ticket
            </button>

            <TicketDetailsModal
                ticketId = {ticketId}
                isOpen = {isOpen}
                onClose = {()=> setIsOpen(false)}
            />

            <button onClick={logout}>
                logout
            </button>
        </div>
    

    );
};

export default TicketsList;