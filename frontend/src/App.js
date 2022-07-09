import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";

import isAuthenticated from './utils/isAuthenticated';
import { UnauthenticatedRoute } from './utils/protectRoutes';
import TicketsList from './tickets/TicketsList';
import TicketCreate from './tickets/TicketCreate';
import DeadPage from './deadpage/DeadPage';
import Profile from './profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <TicketsList/> : <Login/>}/>

        <Route path="/create" element={isAuthenticated() ? <TicketCreate/> : <Login/>}/>
        <Route path="/profile" element={isAuthenticated() ? <Profile/> : <Login/>}/>

        {UnauthenticatedRoute('/register', <Register/>)}

        <Route path="*" element={<DeadPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;