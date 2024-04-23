import { useQuery } from "@tanstack/react-query"

import apiClient from "./api-client"

const useSearchTeam = (team:string)=> 
useQuery({
    queryKey:['searchTeams',team],
    queryFn:()=> apiClient
    .get(`/searchteams.php?t=${team}`)
    .then(res=>res.data)
})


export default useSearchTeam