import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Home/Home/ErrorPage/Error";
import Register from "../Pages/Home/Home/Register/Register";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import SelectClass from "../Pages/Dashboard/SelectClass/SelectClass";
import PrivetRouts from "./PrivetRouts/PrivetRouts";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AdminRouts from "./AdminRouts/AdminRouts";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRouts><Dashboard></Dashboard></PrivetRouts>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/selectClass/${params.id}`)
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>

            },

            {
                path: 'allusers',
                element: <AdminRouts> <ManageUsers></ManageUsers></AdminRouts>
            },

            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myAllClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'selectClass',
                element: <SelectClass></SelectClass>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;