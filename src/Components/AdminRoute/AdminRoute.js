import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();
    if (loading) {
        return <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>
    }
    return <Route {...rest} render = { ({ location }) => user.email && admin ?( children) : (<Redirect to={location}/>) }/> ;
};

export default AdminRoute;