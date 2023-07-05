import styled from "styled-components"

function Timer() {
  const TimerContainer = styled.div`
    background-color: red;
    color: ${props => props.theme.colors.fontColor};
  `;

  return (
    <TimerContainer>
      <h1>Timer</h1>
    </TimerContainer>
  )
}

export default Timer;