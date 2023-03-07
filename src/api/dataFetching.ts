import axios from "axios"
import { useQuery } from "react-query"

const key = import.meta.env.VITE_REACT_APP_API_KEY

export function dataFetching(location:string) {
  //removendo acentos e colocando em lower case
  location = location.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location ? location : 'auto:ip'}&aqi=no&lang=pt`
  const { data, isFetching, refetch } = useQuery('weather', async () => {
    const response = await axios.get(apiUrl)
    return response.data
  },{
    refetchOnWindowFocus: false,
    staleTime: 60000 * 60,
  })

  return { data: data, isFetching: isFetching , refetch}
}
  

