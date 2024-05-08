import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


const useEventDetails = () => 
useQuery({
    queryKey:['eventDetails'],
    queryFn:()=> apiClient.get('searchfilename.php?e=English_Premier_League_2015-04-26_Arsenal_vs_Chelsea')
    .then(res => res.data)
})

export default useEventDetails