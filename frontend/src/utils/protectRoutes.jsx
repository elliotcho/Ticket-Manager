import isAuthenticated from './isAuthenticated'
import { Navigate, Route } from 'react-router-dom';

export const AuthenticatedRoute = (path, element) => {
    if (!isAuthenticated()){
        element = <Navigate to='/'/>;
    }

    return < Route path = {path} element = {element} />
};

export const UnauthenticatedRoute = (path, element) => {
    if (isAuthenticated()){
        element = <Navigate to='/'/>;
    }

    return < Route path = {path} element = {element} />

};