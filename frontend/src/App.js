import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";

import isAuthenticated from './utils/isAuthenticated';
import { UnauthenticatedRoute, AuthenticatedRoute } from './utils/protectRoutes';
import TicketsList from './tickets/TicketsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <TicketsList/> : <Login/>}/>
        {UnauthenticatedRoute('/register', <Register/>)}

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;