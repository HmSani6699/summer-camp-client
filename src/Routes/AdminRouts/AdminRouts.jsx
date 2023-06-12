import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import Spinner from "../../Pages/Spinner/Spinner";


const AdminRouts = ({ children }) => {
    const { user, loading: loding } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loding || isAdminLoading){
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRouts;