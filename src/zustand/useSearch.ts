import { create } from "zustand"

interface Props {
    api : string;
    reset : () => void

    searchText : string
    setSearchText : (text : string) => void

    region : string;
    setRegion : (region : string) => void
}

const useSearch = create<Props>(set => ({
    api : 'all',
    searchText : '',
    
    reset : () => set({api : '/all' , searchText : '' , region : ''}),

    setSearchText : (searchText : string) => set({searchText : searchText , api : `name/${searchText}`}),

    region : '',
    setRegion : (region : string) => set({region : region , api : `region/${region}`})
}))

export default useSearch