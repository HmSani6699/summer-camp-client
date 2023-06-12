import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../../Pages/Spinner/Spinner";

const PrivetRouts = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading) {
        return <Spinner></Spinner>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default PrivetRouts;