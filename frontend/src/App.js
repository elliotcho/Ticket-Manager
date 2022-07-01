import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
import TicketsList from './tickets/TicketsList';
import isAuthenticated from './utils/isAuthenticated';
import { AuthenticatedRoute, UnauthenticatedRoute } from './utils/protectRoutes'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <TicketsList /> : <Login/>}/>
        {UnauthenticatedRoute('/register', <Register />)}
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;