import { useEffect, useState } from "react";

import Numbers from "../components/Numbers";
import { ButtonBox, ButtonsDiv, NumbersDiv, OutletContainer, StyledDots, PlusBox } from "../assets/StyledComponents";
import { PlayIcon, PauseIcon, ResetIcon, TimerIcon, PlusIcon } from "../assets/Icons";
import InputTime from "../components/InputTime";

function Timer() {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=> {
    let clockInterval = null as any;

    if (!isPaused) {
      clockInterval = setInterval(()=> {
        if (minutes === 0 && seconds === 0) {
          setIsPaused(true);
          alert('UHUL');
        } else if (seconds < 1) {
          setSeconds(59);
          setMinutes((prevMin) => prevMin - 1);
        } else {
          setSeconds((prevSecs) => prevSecs - 1);
        }
      }, 1000);
    }

    return () => clearInterval(clockInterval)
  }, [isPaused, seconds]);
  
  const handlePlay = () => {
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsPaused(true);
    setMinutes(10);
    setSeconds(0);
  };

  const handleMoreTime = (time: number) => {
    setMinutes((prev) => {
      if (prev + time >= 59) return 59;
      return prev + time;
    });
    setIsPaused(false);
  }

  return (
    <OutletContainer>
      <TimerIcon />
      <h1>TIMER</h1>
      { isPaused ? (
        <InputTime
          setIsPaused={setIsPaused}
          min={minutes}
          setMin={setMinutes}
          sec={seconds}
          setSec={setSeconds}
        />
      ) :(
        <NumbersDiv>
        <Numbers padLenght={2}>{minutes}</Numbers>
        <StyledDots>:</StyledDots>
        <Numbers padLenght={2}>{seconds}</Numbers>
      </NumbersDiv>
      ) }
      <ButtonsDiv>
        { isPaused ? (
          <ButtonBox onClick={ handlePlay }>
            <PlayIcon />
            Play
          </ButtonBox>
        ) :(
          <ButtonBox onClick={ handlePause }>
            <PauseIcon />
            Pause
          </ButtonBox>
        )}
        { !isPaused && (
          <ButtonBox onClick={ handleReset }>
            <ResetIcon />
            Reset
          </ButtonBox>
        )}

      </ButtonsDiv>
      <ButtonsDiv>
        <PlusBox
          onClick={ () => {
            handleMoreTime(5);
          }}
        >
          <PlusIcon />
          5 Min
        </PlusBox>

        <PlusBox
          onClick={ () => {
            handleMoreTime(10);
          }}
        >
          <PlusIcon />
          10 Min
        </PlusBox>

        <PlusBox
          onClick={ () => {
            handleMoreTime(15);
          }}
        >
          <PlusIcon />
          15 Min
        </PlusBox>
      </ButtonsDiv>
    </OutletContainer>
  )
}

export default Timer;