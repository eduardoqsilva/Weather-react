import styled, { css, keyframes } from "styled-components";

import searchIcon from "../../assets/input/search.svg"


const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`


interface InputContainerType {
  valid: boolean
}

export const InputContainerStyled = styled.div <InputContainerType>`
  width: 400px;
  padding: 0.5rem 1rem;
  background-color: #fdfdfd;
  border-radius: 7px;

  display: flex;
  align-items: center;
  gap: 1rem;

  ${(props) => props.valid ? '' : 
    css`
      box-shadow: 0 0 0 3px #ff4545;
      animation-name: ${shake};
      animation-duration: 0.1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 3;
    `
  }
  
`
export const InputIconStyled = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  background-image: url(${searchIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
export const InputTextStyled = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
`