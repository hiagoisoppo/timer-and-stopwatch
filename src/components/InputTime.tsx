import { useState } from "react";
import { StyledInput, NumbersDiv, StyledDots } from "../assets/StyledComponents";

type InputProps = {
  min: number;
  sec: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
  setSec: React.Dispatch<React.SetStateAction<number>>;
  play: () => void;
};

function InputText({ min, sec, setMin, setSec, play }: InputProps) {
  const [editMin, setEditMin] = useState(String(min).padStart(2, '0'));
  const [editSec, setEditSec] = useState(String(sec).padStart(2, '0'));

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.name === 'min') {
      parseInt(event.target.value) > 59 ? setEditMin('59') : setEditMin(event.target.value.replace(/[^0-9]/g, '0'));
      event.target.value === '' ? setMin(0) : setMin(parseInt(event.target.value.replace(/[^0-9]/g, '0')));
    }
    if (event.target.name === 'sec') {
      parseInt(event.target.value) > 59 ? setEditSec('59') : setEditSec(event.target.value.replace(/[^0-9]/g, '0'));
      event.target.value === '' ? setSec(0) : setSec(parseInt(event.target.value.replace(/[^0-9]/g, '0')));
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
          if (event.keyCode === 13) play();
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
          if (event.keyCode === 13) play();
        }}
      />
    </NumbersDiv>
  );
}

export default InputText;