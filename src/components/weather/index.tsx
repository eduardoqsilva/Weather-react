import { IconWeather, WeatherWrapperStyled } from "./weather.styled";


interface weatherType {
  urlIcon: string
  temp: number
  text: string
  city: string
}

export function Weather({ urlIcon, temp, text, city }: weatherType) {
  return (
    <WeatherWrapperStyled>
      <IconWeather urlIcon={urlIcon}/>
      <div className="text">
        <h1>{Math.round(temp)}</h1>
        <span>{text}</span>
      </div>
      <span>🚩{city}</span>
    </WeatherWrapperStyled>
  )
}