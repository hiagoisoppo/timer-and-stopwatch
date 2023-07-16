import { StyledCounter2, StyledCounter } from "../assets/StyledComponents";

type CounterProps = {
  children: number;
  padLenght: number; 
};

function Numbers({ children, padLenght }: CounterProps) {
  const padNumber = String(children).padStart(padLenght, '0');

  if (padLenght > 2) {
    return (
      <StyledCounter2>
        <span>{ padNumber[0] }</span>
        <span>{ padNumber[1] }</span>
        <span>{ padNumber[2] }</span>
      </StyledCounter2>
    )
  }

  return (
    <StyledCounter>
      <span>{ padNumber[0] }</span>
      <span>{ padNumber[1] }</span>
    </StyledCounter>
  )
}

export default Numbers;