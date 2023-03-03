import axios from "axios"
import { useQuery } from "react-query"

const key = import.meta.env.VITE_REACT_APP_API_KEY

function App() {

  const { data } = useQuery('weather', async () => {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=auto:ip&aqi=no&lang=pt`)
    return response.data
  })

  return (
    <p>{JSON.stringify(data)}</p>
  )
}

export default App
