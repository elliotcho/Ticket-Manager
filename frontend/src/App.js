import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import isAuthenticated from './utils/isAuthenticated';
import { AuthenticatedRoute, UnauthenticatedRoute, AdminRoute } from './utils/protectRoutes';

import Login from "./login/Login";
import Register from "./register/Register";
import TicketsList from './tickets/TicketsList';
import TicketCreate from './tickets/TicketCreate';
import DeadPage from './deadpage/DeadPage';
import Profile from './profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <TicketsList/> : <Login/>}/>
        {AuthenticatedRoute('/create', <TicketCreate />)}
        {AuthenticatedRoute('/profile', <Profile />)}
        {UnauthenticatedRoute('/register', <Register/>)}
        {AdminRoute('/admin', <h1>I AM AN ADMIN</h1>)}
        <Route path="*" element={<DeadPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;