import { useEffect, useState } from "react"
import { dataFetching } from "./api/dataFetching"
import { InputSearch } from "./components/inputSearch"


function App() {
  const [search, setSearch] = useState(String)
  
  //fazendo requisição api
  const res = dataFetching(search)
  console.log(res.isFetching ? 'carregando' : res.data.location)
  const isFetching = res.isFetching
  const data = res.data

  //atualizar os dados quando pesquisar
  useEffect(() => {
    console.log('useEffect executou')
    res.refetch()
  }, [search])

  return (
    <> 
      <InputSearch setSearch={setSearch}/>
      <h2>{isFetching ? 'carregando...' : ''}</h2>
      <h1>{data?.location.name}</h1>
      <h1>{data?.current.condition.text}</h1>
      <h2>{data?.current.feelslike_c}</h2>
    </>
  )
}

export default App
