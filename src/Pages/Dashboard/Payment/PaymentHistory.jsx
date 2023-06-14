
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import PaymentHistoryCard from "./PaymentHistoryCard";
import SectionTitle from "../../../Component/SectioneTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { loading,user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const { data: payments= [], } = useQuery({
    queryKey: ['payments'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  })
   
  return (
    <div>
      <SectionTitle></SectionTitle>
      <h2 className='text-center text-3xl mt-4 mb-6 font-bold'> <span className="text-amber-400">Payment</span> History  </h2>
 <div className=''>
{
payments.map(payment=><PaymentHistoryCard
 key={payment._id}
 payment={payment}>
</PaymentHistoryCard>)
}
</div>

</div>    
  );
};

export default PaymentHistory;