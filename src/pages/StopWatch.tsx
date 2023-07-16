import { useState, useEffect } from "react";

import Numbers from "../components/Numbers";
import { ButtonBox, NumbersDiv, ButtonsDiv, OutletContainer, StyledDots } from "../assets/StyledComponents";
import { PauseIcon, PlayIcon, ResetIcon, StopWatchIcon } from "../assets/Icons";



function StopWatch() {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);
  
  useEffect(()=> {
    let clockInterval = null as any;

    if (!isPaused) {
      clockInterval = setInterval(()=> {
        if (miliseconds > 999) {
          setMiliseconds(0);
          if (seconds > 59) {
            setSeconds(0);
            setMinutes((prevMin) => prevMin + 1);
          } else {
            setSeconds((prevSec) => prevSec + 1);
          };
        } else {
          setMiliseconds((prevMSecs) => prevMSecs + 10);
        }
      }, 10);
    }

    return () => clearInterval(clockInterval)
  }, [isPaused, miliseconds]);
  
  const handlePlay = () => {
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsPaused(true);
    setMinutes(0);
    setSeconds(0);
    setMiliseconds(0);
  };

  return (
    <OutletContainer>
      <StopWatchIcon />
      <h1>STOPWATCH</h1>
      <NumbersDiv>
        <Numbers padLenght={2}>{minutes}</Numbers>
        <StyledDots>:</StyledDots>
        <Numbers padLenght={2}>{seconds}</Numbers>
        <StyledDots>:</StyledDots>
        <Numbers padLenght={3}>{miliseconds}</Numbers>
      </NumbersDiv>

      <ButtonsDiv>
        { isPaused ? (
          <ButtonBox onClick={ handlePlay }>
            <PlayIcon />
            Play
          </ButtonBox>
        ): (
          <ButtonBox onClick={ handlePause }>
            <PauseIcon />
            Pause
          </ButtonBox>
        )}
        <ButtonBox onClick={ handleReset }>
          <ResetIcon />
          Reset
        </ButtonBox>
      </ButtonsDiv>
    </OutletContainer>
  )
}

export default StopWatch;