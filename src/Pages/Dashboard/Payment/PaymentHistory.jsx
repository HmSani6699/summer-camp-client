
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import PaymentHistoryCard from "./PaymentHistoryCard";
import SectionTitle from "../../../Component/SectioneTitle/SectionTitle";

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
      <h2 className='text-center text-3xl my-7 font-bold'> <span className="text-amber-400">Payment</span> History  </h2>
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