
import { LoadingStyled } from "./loading.styled"
import loading from "../../assets/loading/loading.gif"

interface LoadingType {
  value: boolean
}
export function Loading({ value }: LoadingType) {
  return (
    <LoadingStyled value={value}>
      <div className="img">
        <img src={loading}/>
      </div>
    </LoadingStyled>
  )
}