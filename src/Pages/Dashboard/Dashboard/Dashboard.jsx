import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome,  FaSchool,  FaUsers, FaWallet } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="w-full">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-800 text-white">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt>My Selected Classes</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> My Enrolled Classes</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes"><FaSchool></FaSchool> Classes</NavLink></li>
                        <li><NavLink to="/instructors"><FaUsers></FaUsers>Instructors</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;