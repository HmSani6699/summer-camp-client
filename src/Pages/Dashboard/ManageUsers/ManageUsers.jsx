import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Component/SectioneTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await fetch(`https://assignment-12-server-hmsani6699.vercel.app/users`);
            return result.json()
        }
    })


    // UPDATE THE USER
    const handleMackAdmin = user => {
        fetch(`https://assignment-12-server-hmsani6699.vercel.app/users/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} add to  an admin`,
                    })
                }
            })
    }

    const handleMackInstructor  = user => {
        fetch(`https://assignment-12-server-hmsani6699.vercel.app/users/instructor/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} add to  an Instructor`,
                    })
                }
            })
    }

    // DELETE USER
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-hmsani6699.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <div className="">
            {/*  SECTION TITLE IN IFREME  */}
            <Helmet><title>Sadiq | All users</title></Helmet>
            {/*  SECTION TITLE  */}
            <SectionTitle></SectionTitle>

            {/* ALL USERS  */}
            <div className="w-[800px] p-7 bg-[#80808017]">
                <h2 className="text-2xl font-bold mb-6 uppercase">Total Users: {users?.length}</h2>
                <table className="table lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-slate-800 text-white rounded-tl-lg"> #</th>
                            <th className="bg-slate-800 text-white">NAME</th>
                            <th className="bg-slate-800 text-white">EMAIL</th>
                            <th className="bg-slate-800 text-white">ROLE</th>
                            <th className="bg-slate-800 text-white rounded-tr-lg">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td><h2 className="font-semibold">{user.name}</h2></td>
                                <td><h2 >{user.email}</h2></td>
                                <th>
                                    <div>
                                        <div className="mb-2">
                                            {
                                                user.rol === 'admin' ? <h2 className="text-[#D1A054] text-center font-semibold">Admin</h2> : <button onClick={() => handleMackAdmin(user)} className="btn w-full btn-sm h-3 bg-amber-400 ">
                                                    Admin
                                                </button>
                                            }
                                        </div>
                                        <div>
                                            {
                                                user.rol === 'instructor' ? <h2 className="text-[#D1A054] text-center font-semibold">Instructor </h2> : <button onClick={() =>handleMackInstructor(user)} className="btn w-full btn-sm h-3 bg-amber-400 ">
                                                    Instructors
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-circle h-3 bg-red-800 text-white">
                                        <FaTrashAlt className="text-1xl"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;