import { ReactNode, useEffect, useState } from "react";
import { BackgroundMainStyled, MainContainerStyled } from "./main.styled";

import dayVid from "/videos/day.mp4"
import nightVid from "/videos/night.mp4"
import thumbDay from "/thumb/day.png"
import thumbNight from "/thumb/night.png"

interface mainType {
  children: ReactNode
  Day: number
}
export function Main({ Day, children }: mainType) {
  
  const [isDay , setIsday] = useState(0)

  useEffect(() =>{
    if(Day !== undefined) {
      setIsday(Day)
    }
  }, [Day])
  useEffect(() => {
    if(Day !== undefined) {
      setIsday(Day)
    }
  }, [])

  return(

    <BackgroundMainStyled>
      <div className="videos">
        <video 
          autoPlay
          muted
          loop
          poster={ Day === 0 ? thumbNight : thumbDay}
          src={Day === 0 ? nightVid : dayVid}>
        </video>
        
      </div>
      
      <MainContainerStyled>
        {children}
      </MainContainerStyled>
    </BackgroundMainStyled>
  )
}