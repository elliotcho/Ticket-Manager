import React, { useEffect, useState } from 'react';
import { describeTicket, createTicket, describeUser, createComment } from './ticket-operations';
import decode from 'jwt-decode';
import Modal from 'react-modal';
import './ticketModal.css';

const TicketDetailsModal = ({ticketId, isOpen, onClose}) => {

    const [ticket, setTicket] = useState({});
    const [comment, setComment] = useState("");
    const token = window.localStorage.getItem("token");
    const id = decode(token);

    useEffect(() => {
        const fetchData = async () => {
            const ticketResponse = await describeTicket(ticketId);
            setTicket(ticketResponse);
        };


        fetchData();
    }, [ticketId]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const userId = await describeUser(id);

        const commentSubmit = {
            userId,
            comment
        };
    
        const data = await createComment(commentSubmit);

        setComment("");
    };


    return (
        <Modal 
            isOpen = {isOpen}
            className="modal"
        >
            <h1>TICKET: {ticket.ticketId}</h1>
            <ul>
                <li>{ticket.userId}</li>
                <li>{ticket.content}</li>
                <li>{ticket.createdAt}</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <h3>COMMENT</h3>
                <input 
                    type="text"
                    placeholder="Enter details here..." 
                    value={comment} 
                    onChange={e=> setComment(e.target.value)}
                />
                <button>SUBMIT</button>
            </form>

            

            <button onClick={onClose}>
                Close
            </button>

        </Modal>
    );
}

export default TicketDetailsModal;