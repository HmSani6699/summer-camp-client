import { FaTrashAlt } from "react-icons/fa";
import useClass from "../../../Hooks/useClass";
import SectionTitle from "../../../Component/SectioneTitle/SectionTitle";
import { Helmet } from "react-helmet";

const SelectClass = () => {
    
    const [loadClass] =useClass();
    console.log(loadClass);


    const handlaCartDelete=()=>{

    }

    const sum = loadClass?.reduce((a, b) => a + b?.Price, 0)

    return (
        <div className="h-screen">
        <Helmet><title>Bistro boss | My card</title></Helmet>
       <SectionTitle hedding={'WANNA ADD MORE?'} subHadding={'---My Cart---'}></SectionTitle>
       <div className="w-[700px] p-7 bg-[#cccccc1f]">
           <div className="lg:flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold uppercase">Total orders: {loadClass?.length}</h2>
               <h2 className="text-2xl font-bold uppercase">total price: ${sum}</h2>
           </div>
           <table className="table lg:w-full overflow-auto">
               {/* head */}
               <thead>
                   <tr>
                       <th className="bg-[#D1A054] text-white"> #</th>
                       <th className="bg-[#D1A054] text-white">ITEM IMAGE</th>
                       <th className="bg-[#D1A054] text-white">ITEM NAME</th>
                       <th className="bg-[#D1A054] text-white">PRICE</th>
                       <th className="bg-[#D1A054] text-white">ACTION</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       loadClass?.map((item, i) => <tr key={item._id}>
                           <th>{i + 1}</th>
                           <td>
                               <div className="avatar">
                                   <div className="mask mask-squircle w-12 h-12">
                                       <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                   </div>
                               </div>
                           </td>
                           <td><h2 className="font-semibold">{item.name}</h2></td>
                           <td><p className="text-end">${item.Price}</p></td>
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
    );
};

export default SelectClass;