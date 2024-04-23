import { useQuery } from "@tanstack/react-query"

import apiClient from "./api-client"

const useSearchTeam = (league:number)=> 
useQuery({
    queryKey:['searchLeague',league],
    queryFn:()=> apiClient
    .get(`/lookuptable.php?l=${league}&s=2020-2021`)
    .then(res=>res.data)
})


export default useSearchTeam