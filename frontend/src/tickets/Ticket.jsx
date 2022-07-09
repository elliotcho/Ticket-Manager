import React from 'react';
import './tickets.css';

const Ticket = ({
    content,
    ticketId,
    createdAt,
    seeDetails,
    username
}) => {
    return (
        <div className = 'ticket' onClick={seeDetails}>
            <h1>{username}</h1>
            <div>{content}</div>
        </div>
    )
};

export default Ticket;