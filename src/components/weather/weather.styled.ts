import styled from "styled-components";

export const WeatherWrapperStyled = styled.article`
  width: 100%;
  max-width: 500px;
  height: 300px;
  border-radius: 10px;
  background: rgba(0,0,0, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.8px);
  -webkit-backdrop-filter: blur(4.4px);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  font-family: 'Poppins', sans-serif;
  color: #fff;
  
  position: relative;

  & .text {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & h1 {
      font-size: 4rem;
      font-weight: 600;
      line-height: 4rem;
      position: relative;
      width: fit-content;

      ::after {
        content: '°c';
        width: fit-content;
        height: fit-content;
        display: block;

        font-size: 2rem;
        position: absolute;
        top: -1.5rem;
        right: -2rem;
      }
    }
    & span {
      font-weight: 600;
    }
  }

  & span {
    font-weight: 500;
    font-size: 1.2rem;
  }
`
interface IconWeatherType {
  urlIcon: string
}
export const IconWeather = styled.div<IconWeatherType>`
  width: 4rem;
  height: 4rem; 
  
  background-image: url(${(props) => props.urlIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: absolute;
  top: 1rem;
  right: 2rem;
`