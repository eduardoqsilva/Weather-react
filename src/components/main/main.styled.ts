import styled from "styled-components";

export const MainContainerStyled = styled.main`
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px auto 80px;
  align-items: center;
  justify-items: center;

  padding: 1rem;

  position: absolute;
  top: 0;
  left: 0;

  overflow-x: hidden;
  overflow-y: hidden;
`

export const BackgroundMainStyled = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  & .videos {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    & video {
      min-width: 100%;
      min-height: 100%;
    }
  }
`