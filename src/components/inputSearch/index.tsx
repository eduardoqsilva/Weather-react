import { KeyboardEvent, useState } from "react"
import { InputContainerStyled, InputIconStyled, InputTextStyled } from "./inputSearch"


interface InputSearchType {
  setSearch: (v:string) => void 
}

export function InputSearch({ setSearch }:InputSearchType) {

  const [valid, setValid] = useState(true)

  function handleSetValue(e: KeyboardEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    
    if (e.key === 'Enter') {
      console.log('enter aqui')
      if(value.length >= 3) {
        setSearch(value)
        setValid(true)
      }
      else {
        setValid(false)
      }
    }
  }
  
  return (
    <InputContainerStyled  valid={valid}>
      <InputIconStyled/>
      <InputTextStyled type='text' onKeyDown={handleSetValue}/>
    </InputContainerStyled>
  )
}