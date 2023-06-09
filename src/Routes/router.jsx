import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Home/Home/ErrorPage/Error";
import Register from "../Pages/Home/Home/Register/Register";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";


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
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;