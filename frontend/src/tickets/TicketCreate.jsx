import React, { useState } from "react";
import { createTicket, describeUser } from './ticket-operations';
import decode from 'jwt-decode';

const TicketCreate = () => {
    const [content, setContent] = useState("");
    const token = window.localStorage.getItem("token");
    const id = decode(token);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const userId = await describeUser(id);

        const ticket = {
            userId,
            content
        };
    
        const data = await createTicket(ticket);

        setContent("");
    };

    return(
        <div class= 'login-container'>
        <div></div>

        <div className='login-form-container'>
          <form onSubmit={handleSubmit} id="ticketForm">
            <h3>Content</h3>
            <input 
              type="text"
              placeholder="Enter details here..." 
              value={content} 
              onChange={e=> setContent(e.target.value)}
              required
            />

            <button>SUBMIT</button>
          </form>
        </div>

      </div>
    );


};

export default TicketCreate;