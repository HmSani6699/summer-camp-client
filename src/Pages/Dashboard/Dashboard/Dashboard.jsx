import { NavLink, Outlet } from "react-router-dom";
import { FaBible, FaHome, FaSchool, FaTerminal, FaUsers } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";



const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                        <div className="avatar flex justify-center mt-8 mb-5">
                            <div className="w-14 ring ring-amber-500  rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h2 className="text-1xl font-bold text-center">{user?.displayName}</h2>
                        <p className="mb-5 text-center">{user?.email}</p>
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            </> : isInstructor ? <>
                                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> Instructor Home</NavLink></li>
                                <li><NavLink to="/dashboard/addClass"><FaHome></FaHome> Add class</NavLink></li>
                                <li><NavLink to="/dashboard/myAllClass"><FaHome></FaHome> My Classes</NavLink></li>
                            </> :
                                <>
                                    <li><NavLink to="/dashboard/userHome"><FaHome className="text-[20px]"></FaHome> Student Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selectClass"><FaBible className="text-[20px]"></FaBible>My Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaTerminal className="text-[20px]"></FaTerminal> My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/paymentHistory"><FaTerminal className="text-[20px]"></FaTerminal> Payment History</NavLink></li>
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