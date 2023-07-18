import { useEffect, useState } from "react";

import Numbers from "../components/Numbers";
import { ButtonBox, ButtonsDiv, NumbersDiv, OutletContainer, StyledDots, PlusBox } from "../assets/StyledComponents";
import { PlayIcon, PauseIcon, ResetIcon, TimerIcon, PlusIcon } from "../assets/Icons";
import InputTime from "../components/InputTime";
import Warning from "../components/Warning";
import sound from '../assets/silvio-santos-o-seu-tempo-acabou.mp3';

function Timer() {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  const alarm = new Audio(sound);
  
  useEffect(()=> {
    let clockInterval = null as any;

    if (!isPaused) {
      clockInterval = setInterval(()=> {
        if (minutes === 0 && seconds === 0) {
          alarm.play();
          setIsPaused(true);
          setIsFinish(true);
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
    setMinutes((prev) => {
      if (prev > 59) {
        return 59;
      } else {
        return prev;
      }
    })
    setSeconds((prev) => {
      if (prev > 59) {
        return 59;
      } else {
        return prev;
      }
    })
    setIsFinish(false);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsFinish(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsFinish(false);
    setIsPaused(true);
    setMinutes(10);
    setSeconds(0);
  };

  const handleMoreTime = (time: number) => {
    setIsFinish(false);
    setMinutes((prev) => {
      if (prev + time >= 59) return 59;
      return prev + time;
    });
    setIsPaused(false);
  }

  return (
    <OutletContainer>
      {isFinish && <Warning moreTime={handleMoreTime} setIsFinish={setIsFinish} />}
      <TimerIcon />
      <h1>TIMER</h1>
      { isPaused ? (
        <InputTime
          play={handlePlay}
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