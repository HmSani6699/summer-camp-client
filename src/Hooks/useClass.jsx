
import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";

const useClass = () => {
    const { user } = useAuth();
    // console.log(user);
    const { data: loadClass, refetch } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class?email=${user?.email}`);
            return res.json()
        },


    })

    return [loadClass, refetch]
}

export default useClass