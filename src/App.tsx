import axios from "axios"
import { useQuery } from "react-query"

function App() {

  const key = import.meta.env.VITE_REACT_APP_API_KEY
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=auto:ip&aqi=no&lang=pt`

  const { data, isFetching } = useQuery('weather',    async () => {
    const response = await axios.get(apiUrl)
    return response.data
  },{refetchOnWindowFocus: false,})
  
  try {
    console.log(data)
  } catch (err) {
    console.log(err)
  }

  return (
    <> 
      <h2>{isFetching ? 'carregando...' : ''}</h2>
      <h1>{data?.location.name}</h1>
      <h1>{data?.current.condition.text}</h1>
      <h2>{data?.current.feelslike_c}</h2>
    </>
  )
}

export default App
