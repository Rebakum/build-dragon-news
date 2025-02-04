import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PriviteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    
    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>;
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;


};

export default PriviteRoute;