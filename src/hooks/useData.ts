import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../services/axios"
const useData = <T>(endpoint : string ,  deps? : string[]) => {
    return useQuery({
        queryKey : deps || [],
        
        queryFn : () => axiosInstance.get<T[]>(endpoint).then(res => res.data),
        retry : false,
        staleTime : 24 * 60 * 60
    })
}

export default useData