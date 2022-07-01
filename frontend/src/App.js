import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
import TicketDetailsModal from './tickets/TicketDetailsModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ticket/:ticketId" element={<TicketDetailsModal/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;