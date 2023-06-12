import { NavLink, Outlet } from "react-router-dom";
import { FaBible, FaHome, FaSchool, FaTerminal, FaUsers } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {

    const { user } = useAuth();

    const isAdmin = true;

    return (
        <div className="w-full">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-[100%] bg-slate-800 text-white">
                        {/* <h2 className="font-bold text-2xl lg:ml-4  mt-5 mb-10"><span className="text-[#f59f0bf1] ">Sadiq</span> Web</h2> */}
                        <div className="avatar flex justify-center mt-8 mb-8">
                            <div className="w-14 ring ring-amber-500  rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <p className="mb-10 text-center">{user?.email}</p>
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> ADMIN HOME</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            </> : <>
                                <li><NavLink to="/dashboard/userHome"><FaHome className="text-[20px]"></FaHome> Student Home</NavLink></li>
                                <li><NavLink to="/dashboard/selectClass"><FaBible className="text-[20px]"></FaBible>My Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaTerminal className="text-[20px]"></FaTerminal> My Enrolled Classes</NavLink></li>
                            </>
                        }

                        <div className="border my-8 border-amber-500"></div>

                        <li><NavLink to="/"><FaHome className="text-[20px]"></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes"><FaSchool className="text-[20px]"></FaSchool> Classes</NavLink></li>
                        <li><NavLink to="/instructors"><FaUsers className="text-[20px]"></FaUsers>Instructors</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Dashboard;