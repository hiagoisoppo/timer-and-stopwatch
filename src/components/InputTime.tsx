import { useState } from "react";
import { StyledInput, NumbersDiv, StyledDots } from "../assets/StyledComponents";

type InputProps = {
  min: number;
  sec: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
  setSec: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
};

function InputText({ min, sec, setMin, setSec, setIsPaused }: InputProps) {
  const [editMin, setEditMin] = useState(String(min).padStart(2, '0'));
  const [editSec, setEditSec] = useState(String(sec).padStart(2, '0'));

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.name === 'min') {
      setEditMin(event.target.value);
      setMin(parseInt(event.target.value))
    }
    if (event.target.name === 'sec') {
      setEditSec(event.target.value);
      setSec(parseInt(event.target.value))
    }
  }

  return (
    <NumbersDiv>
      <StyledInput
        value={ editMin }
        type="text"
        name="min"
        maxLength={2}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputs(event)}
        onKeyDownCapture={ (event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.keyCode === 13) setIsPaused((prev) => !prev);
        }}
      />
      <StyledDots>:</StyledDots>
      <StyledInput
        value={ editSec }
        type="text"
        name="sec"
        maxLength={2}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputs(event)}
        onKeyDownCapture={ (event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.keyCode === 13) setIsPaused((prev) => !prev);
        }}
      />
    </NumbersDiv>
  );
}

export default InputText;