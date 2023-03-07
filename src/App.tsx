import { useEffect, useState } from "react"
import { dataFetching } from "./api/dataFetching"
import { InputSearch } from "./components/inputSearch"
import { Weather } from "./components/weather"


function App() {
  const [search, setSearch] = useState(String)
  
  //fazendo requisição api
  const res = dataFetching(search)
  console.log(res.isFetching ? 'carregando' : res.data)
  const isFetching = res.isFetching
  const data = res.data

  //atualizar os dados quando pesquisar
  useEffect(() => {
    res.refetch()
  }, [search])

  return (
    <> 
      <InputSearch setSearch={setSearch}/>
      {/* <h2>{isFetching ? 'carregando...' : ''}</h2>
      <h1>{data?.current.is_day} dia?</h1> */}
      <Weather 
        urlIcon={data?.current.condition.icon}
        city={`${data?.location.name} ${data?.location.region} ${data?.location.country}`}
        text={data?.current.condition.text}
        temp={data?.current.feelslike_c}
      />
    </>
  )
}

export default App
