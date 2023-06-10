import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaRegTimesCircle } from "react-icons/fa";

const PopularClass = ({ classe, set }) => {
    const { image, name, InstructorName, Price, AvailableSeats, _id } = classe;
    const { user } = useAuth();
    const navigat = useNavigate();

    // console.log(classe);

    const handleCelectClass = id => {
        console.log(id);
        if (!user) {
            Swal.fire({
                icon: 'warning',
                title: 'Please confirme the  user login',
            })
            return navigat('/login', { replace: true })
        }
    }


    return (
        <div className="card  w-full border bg-base-100 shadow-xl">
            <div className="">
                <figure><img className="h-[320px] rounded-t-xl border w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-center ">{name}</h2>
                    <p><span className="font-bold"> Instructor Name:</span> {InstructorName}</p>
                    {
                        set === 'set' && <p><span className="font-bold"> Available seats:</span> {AvailableSeats}</p>
                    }
                    <p><span className="font-bold">Price : </span><span className="text-amber-400 font-semibold">${Price}</span></p>
                </div>
                <div className="mt-4 ">
                    {
                        AvailableSeats === 0 ? <>
                            <button disabled onClick={() => handleCelectClass(_id)} className="btn  btn-warning w-full">Select class</button>
                            <p className="text-red-500 flex items-center mt-3 gap-2"><FaRegTimesCircle></FaRegTimesCircle> There are no seats available !!</p>
                        </> : <button onClick={() => handleCelectClass(_id)} className="btn  btn-warning w-full">Select class</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularClass;