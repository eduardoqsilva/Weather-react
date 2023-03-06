import { dataFetching } from "./api/dataFetching"


const key = import.meta.env.VITE_REACT_APP_API_KEY
const locate = 'santa helena de goias' //auto:ip
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${locate}&aqi=no&lang=pt`

function App() {

  const res = dataFetching( apiUrl)
  const data = res.data
  const isFetching = res.isFetching

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
