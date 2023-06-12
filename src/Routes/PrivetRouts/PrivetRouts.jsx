import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivetRouts = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading) {
        return 
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default PrivetRouts;