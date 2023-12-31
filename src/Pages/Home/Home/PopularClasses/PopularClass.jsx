import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaRegTimesCircle } from "react-icons/fa";
import useAdmin from "../../../../Hooks/useAdmin";
import useInstructor from "../../../../Hooks/useInstructor";

const PopularClass = ({ classe, set }) => {
    const { image, name, instructor, price,student, seats, _id } = classe;
    const { user } = useAuth();
    const navigat = useNavigate();

    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor()

    
    const handleCelectClass = () => {
        
        const selectClass = {classesId:_id,name,image,instructor,price,seats,email:user?.email}

        if (user && user?.email) {
            fetch('https://assignment-12-server-hmsani6699.vercel.app/selectClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data?.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Class select success full !!',
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Please login!',
                    )
                    navigat('/login', { state: { from: location } })
                }
            })
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
                    <p><span className="font-bold"> Instructor Name:</span> {instructor}</p>
                    {
                        set === 'set' && <p><span className="font-bold"> Available seats:</span> {seats}</p>
                    }
                    <p><span className="font-bold">Price : </span><span className="text-amber-400 font-semibold">${price}</span></p>
                    <p><span className="font-bold">Total Enrolled: </span><span className="text-amber-400 font-semibold">{student}</span></p>
                </div>
                <div className="mt-4 ">
                    {
                        seats === 0 ||isAdmin||isInstructor ? <>
                            <button disabled onClick={() => handleCelectClass(_id)} className="btn  btn-warning w-full">Select class</button>
                            {
                                isAdmin&&isInstructor&& <> <p className="text-red-500 flex items-center mt-3 gap-2"><FaRegTimesCircle></FaRegTimesCircle> There are no seats available !!</p> </>
                            }
                        </> : <button onClick={() => handleCelectClass()} className="btn  btn-warning w-full">Select class</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularClass;