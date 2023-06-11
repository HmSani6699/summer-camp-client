import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

const useClass = () => {
    const { user } = useAuth()

    const { data: selectClass, refetch } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json()
        },
    });
    return [selectClass, refetch]

}

export default useClass;