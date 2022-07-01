import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
import TicketDetailsModal from './tickets/TicketDetailsModal';

import isAuthenticated from './utils/isAuthenticated';
import { UnauthenticatedRoute, AuthenticatedRoute } from './utils/protectRoutes';
import TicketsList from './tickets/TicketsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <TicketsList/> : <Login/>}/>
        {UnauthenticatedRoute('/register', <Register/>)}
        {AuthenticatedRoute('/ticket/:ticketId', <TicketDetailsModal/>)}
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;