import { FaTrashAlt } from "react-icons/fa";
import useClass from "../../../Hooks/useClass";
import SectionTitle from "../../../Component/SectioneTitle/SectionTitle";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const SelectClass = () => {

    const [loadClass,refetch] = useClass();


    const handlaCartDelete = (id) => {
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
                fetch(`http://localhost:5000/class/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const sum = loadClass?.reduce((a, b) => a + b?.Price, 0)

    return (
        <div className="">
            <Helmet><title>Sadiq| SelectClass</title></Helmet>
            <p className="pt-5"></p>
            <SectionTitle></SectionTitle>
            <h2 className="text-3xl font-bold text-center  mb-12">Select the all <span className="text-amber-400">Class</span> list</h2>
            <div className="w-[800px] p-7 bg-[#80808017] ">
                <div className="lg:flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold uppercase">Total Selects class: <span className="text-amber-400">{loadClass?.length}</span></h2>
                    <h2 className="text-2xl font-bold uppercase">total price: <span className="text-amber-400">${sum}</span></h2>
                </div>
                <table className="table lg:w-full overflow-x-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-slate-800 rounded-tl-lg text-white"> #</th>
                            <th className="bg-slate-800 text-white">CLASS</th>
                            <th className="bg-slate-800 text-white">PRICE</th>
                            <th className="bg-slate-800 text-white">PAY</th>
                            <th className="bg-slate-800 rounded-tr-lg text-white">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadClass?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-20 rounded">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <h2 className="font-semibold">{item.name}</h2>
                                    </div>
                                </td>
                                <td><p className="">${item.Price}</p></td>
                                <td><button className="btn btn-sm bg-amber-400">Pay</button></td>
                                <th>
                                    <button onClick={() => handlaCartDelete(item._id)} className="btn btn-circle h-3 bg-red-800 text-white">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
        // <div className="overflow-x-auto">
        //     <table className="table">
        //         {/* head */}
        //         <thead>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <th>Name</th>
        //                 <th>Job</th>
        //                 <th>Favorite Color</th>
        //                 <th></th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {/* row 1 */}
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Hart Hagerty</div>
        //                             <div className="text-sm opacity-50">United States</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Zemlak, Daniel and Leannon
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        //                 </td>
        //                 <td>Purple</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             {/* row 2 */}
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Brice Swyre</div>
        //                             <div className="text-sm opacity-50">China</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Carroll Group
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        //                 </td>
        //                 <td>Red</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             {/* row 3 */}
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Marjy Ferencz</div>
        //                             <div className="text-sm opacity-50">Russia</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Rowe-Schoen
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        //                 </td>
        //                 <td>Crimson</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             {/* row 4 */}
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <label>
        //                         <input type="checkbox" className="checkbox" />
        //                     </label>
        //                 </th>
        //                 <td>
        //                     <div className="flex items-center space-x-3">
        //                         <div className="avatar">
        //                             <div className="mask mask-squircle w-12 h-12">
        //                                 <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="font-bold">Yancy Tear</div>
        //                             <div className="text-sm opacity-50">Brazil</div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     Wyman-Ledner
        //                     <br />
        //                     <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        //                 </td>
        //                 <td>Indigo</td>
        //                 <th>
        //                     <button className="btn btn-ghost btn-xs">details</button>
        //                 </th>
        //             </tr>
        //         </tbody>
        //         {/* foot */}
        //         <tfoot>
        //             <tr>
        //                 <th></th>
        //                 <th>Name</th>
        //                 <th>Job</th>
        //                 <th>Favorite Color</th>
        //                 <th></th>
        //             </tr>
        //         </tfoot>

        //     </table>
        // </div>
    );
};

export default SelectClass;