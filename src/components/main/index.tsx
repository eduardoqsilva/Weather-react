import { ReactNode } from "react";
import { MainContainerStyled } from "./main.styled";

interface mainType {
  children: ReactNode
}
export function Main({ children }: mainType) {
  return(
    <MainContainerStyled>
      {children}
    </MainContainerStyled>
  )
}