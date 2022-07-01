import React from 'react';
import logout from '../utils/logout';

const TicketsList = () => {
    return (
        <div>
            <h3>
                Hello
            </h3>
            
            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default TicketsList;