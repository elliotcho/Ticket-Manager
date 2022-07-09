import React, { useEffect, useState } from 'react';
import { listTickets } from './ticket-operations';
import TicketDetailsModal from './TicketDetailsModal';
import Ticket from './Ticket';
import logout from '../utils/logout';

const TicketsList = () => {
    const [prefix, setPrefix] = useState('');
    const [ticketList, setTicketList] = useState([]);
    const [ticketMap, setTicketMap] = useState({});
    const [ticketId, setTicketId] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const ticketsResponse = await listTickets({ prefix });

            const map = {};
            for (let i=0;i<ticketsResponse.length;i++) {
                const ticket = ticketsResponse[i];
                map[ticket._id] = ticket;
            }

            setTicketList(ticketsResponse);
            setTicketMap(map);
        };

        fetchData();
    }, [prefix]);

    const ticketComponents = ticketList.map(t => {
        return (
            <Ticket
                key = {t._id}
                content = {t.content}
                createdAt = {t.createdAt}
                seeDetails = {() => {
                    setTicketId(t._id)
                    setIsOpen(true);
                }}
                username = {t.username}
                ticketId = {t._id}
            />
        );
    });

    return (
        <div className='tickets-list-container'>
            <h3>Hello</h3>

            <input 
              type="text"
              placeholder="Search tickets"
              onChange = {e => setPrefix(e.target.value)} 
              value={prefix} 
            />

            {ticketComponents}

            <TicketDetailsModal 
                ticket = {ticketMap[ticketId]}
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