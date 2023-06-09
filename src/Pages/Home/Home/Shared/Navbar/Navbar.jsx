import { Link, useNavigate} from "react-router-dom";
import logo from '../../../../../assets/logo.png'
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";

// HANDLE LOG OUT


const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOutUser()
        .then(()=>{
            console.log('ami runng asi');
            navigate('/login', { replace: true });
            Swal.fire({
                icon: 'success',
                title: `Log Out success`,
            })
            
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: `{${error}}`,
            })
        })
    }



    const navLink = <>
        <li><Link>Home</Link></li>
        <li><a>Item 3</a></li>
    </>


    return (
        <div className="navbar bg-[#0000000a] fixed z-10  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  font-semibold menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className="h-16 w-16" src={logo} alt="" />
                <h2 className="text-2xl font-bold text-amber-400">SADIQ</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-semibold text-white text-1xl menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="avatar online lg:mr-4">
                    <div className="w-12 h-12 rounded-full ring ring-[#fbbc24e3] ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>}
                {
                    user ? <Link> <input onClick={handleLogOut} type="submit" className="btn bg-[#fbbc24e3] mr-5" value="Log Out" /></Link> :
                        <Link to='/login'> <input type="submit" className="btn bg-[#fbbc24e3] mr-5" value="Log in" /></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;