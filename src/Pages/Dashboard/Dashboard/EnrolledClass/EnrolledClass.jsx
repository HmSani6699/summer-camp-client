import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../../Component/SectioneTitle/SectionTitle';

const EnrolledClass = () => {
    const loadPayment = useLoaderData()
    console.log(loadPayment);
    return (
        <div>
            <SectionTitle></SectionTitle>
            <h2 className='text-3xl font-bold text-center mb-10'>My Enroll <span className='text-amber-400'>class</span></h2>
            <div className="overflow-x-auto">

                <table className="table lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-slate-800 text-white rounded-tl-lg"> #</th>
                            <th className="bg-slate-800 text-white">NAME</th>
                            <th className="bg-slate-800 text-white">EMAIL</th>
                            <th className="bg-slate-800 text-white">DATE</th>
                            <th className="bg-slate-800 text-white">PRICE</th>
                            <th className="bg-slate-800 text-white rounded-tr-lg">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadPayment?.map((item, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;