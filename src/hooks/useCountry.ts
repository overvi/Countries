import { Country } from "../entitis/Country"
import useSearch from "../zustand/useSearch"
import useData from "./useData"

const useCountry = () => {
    const {api , searchText , region} = useSearch()
    return useData<Country>(api , [region , searchText]) 
}

export const useDetails = (name : string) => {
    return useData<Country>(`name/${name}` || '' , [name])
}

export default useCountry