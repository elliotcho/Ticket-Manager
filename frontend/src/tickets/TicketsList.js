import React from 'react';
import logout from '../utils/logout'

const TicketsList = () => {
    return(

        <div>

            <h3>
                Hello World
            </h3>

            <button onClick={logout}>
                logout
            </button>
        </div>
    

    );
};

export default TicketsList;