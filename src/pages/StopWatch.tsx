import styled from "styled-components"


function StopWatch() {
  const StopWatchContainer = styled.div`
    background-color: red;
    color: ${props => props.theme.colors.fontColor};
  `;

  return (
    <StopWatchContainer>
      <h1>StopWatch</h1>
    </StopWatchContainer>
  )
}

export default StopWatch;