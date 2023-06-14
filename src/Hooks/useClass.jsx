
import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";

const useClass = () => {
    const { user } = useAuth();
    // console.log(user);
    const { data: loadClass, refetch } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-hmsani6699.vercel.app/class?email=${user?.email}`);
            return res.json()
        },


    })

    return [loadClass, refetch]
}

export default useClass