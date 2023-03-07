import styled from "styled-components";


interface LoadingType {
  value: boolean;
}

export const LoadingStyled = styled.div<LoadingType>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);

  z-index: 999;

  display: ${(props) => props.value ? `flex` : `none`};
  align-items: center;
  justify-content: center;

  & .img {
    background: #fdfdfd;
    padding: 2rem;
    border-radius: 20px;
  }
`