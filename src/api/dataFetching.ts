import axios from "axios"
import { useQuery } from "react-query"


export function dataFetching(apiUrl:string) {

  const { data, isFetching } = useQuery('weather',    async () => {
    const response = await axios.get(apiUrl)
    return response.data
  },{
    refetchOnWindowFocus: false,
    staleTime: 60000 * 60,
  })
  console.log(data)
  return { data: data, isFetching: isFetching}
}
  

