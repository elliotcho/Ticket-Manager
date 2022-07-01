import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
import TicketDetailsModal from './tickets/TicketDetailsModal';
import TicketsList from './tickets/TicketsList';
import isAuthenticated from './utils/isAuthenticated';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <TicketsList /> : <Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ticket/:ticketId" element={<TicketDetailsModal/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;