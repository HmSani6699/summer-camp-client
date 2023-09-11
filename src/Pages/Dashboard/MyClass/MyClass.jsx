import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';

import Swal from 'sweetalert2';
import MyClassCard from '../Dashboard/MyClassCard/MyClassCard';
import SectionTitle from '../../../Component/SectioneTitle/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const MyClass = () => {
  const { loading, user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myAllClass = [], error,refetch } = useQuery({
    queryKey: ['myAllClass', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myAllClass?email=${user?.email}`);
      return res.data;
    },
  })
  // console.log(myAllClass);

 const handleDelete = id => {
    // console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-12-server-hmsani6699.vercel.app/myClass/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              refetch();
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
    <div className=' w-[800px] p-7 bg-[#80808017]  px-4 pt-4 pb-20'>
      <SectionTitle></SectionTitle>
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className='font-semibold text-lg text-purple-700'>
            <tr>
              <th className='bg-slate-800 text-white rounded-tl-lg'>#</th>
              <th className='bg-slate-800 text-white'>Image</th>
              <th className='bg-slate-800 text-white'>Class Name</th>
              <th className='bg-slate-800 text-white'>Instructor</th>
              <th className='bg-slate-800 text-white'>Email</th>
              <th className='bg-slate-800 text-white'>Seats</th>
              <th className='bg-slate-800 text-white'>Price</th>
              <th className='bg-slate-800 text-white'>Status</th>
              <th className='bg-slate-800 text-white'>Total Enrolled</th>
              <th className='bg-slate-800 text-white'>Feedback</th>
              <th className='bg-slate-800 text-white rounded-tr-lg'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              myAllClass?.map((myClass, index) => <MyClassCard
                key={myClass._id}
                myClass={myClass}
                handleDelete={handleDelete}
                index={index}
              ></MyClassCard>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyClass;