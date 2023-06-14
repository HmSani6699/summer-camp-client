// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";

// const useInstructor = () => {
//     const { user,loading } = useAuth();

//     const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
//         queryKey: ['isaInstructor', user?.email],
//         enabled:!loading,
//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`);
//             return res.json()
//         },

//     })

//     return [isInstructor, isInstructorLoading]

// };

// export default useInstructor;

import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useInstructor = () =>{
const {user,loading} = useAuth();
const [axiosSecure] = useAxiosSecure();
const {data: isInstructor, isLoading:isInstructorLoading} = useQuery({
queryKey:['isInstructor', user?.email],
enabled: !loading,
queryFn: async()=>{
const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
return res.data.instructor
}
});
return [isInstructor,isInstructorLoading]
}
export default useInstructor