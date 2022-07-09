import React, { useState } from 'react';
import logout from '../utils/logout'
import TicketDetailsModal from './TicketDetailsModal';

const TicketsList = () => {

    const [setTicketId, ticketId] = '62a6bcc002428df2566cef61';
    const [isOpen, setIsOpen] = useState(false);

    const seeTicket = async =>{
        setIsOpen(true);
    };


    return(

        <div>

            <h3>TICKET LIST</h3>

            <button onClick = {seeTicket}>
                {ticketId}
            </button>

            <TicketDetailsModal
                ticketId = {ticketId}
                isOpen = {isOpen}
                onClose = {()=> setIsOpen(false)}
            />

            <button onClick={logout}>
                Logout
            </button>
            
        </div>
    

    );
};

export default TicketsList;