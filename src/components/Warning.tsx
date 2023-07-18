import { ButtonsDiv, WarningPlusBox, WarningModal } from "../assets/StyledComponents";
import { PlusIcon, WarningIcon, CrossIcon } from "../assets/Icons";
import sound from '../assets/e-ta-baum-silvio-santos.mp3';
import sound2 from '../assets/silvio-santos-que.mp3';

interface WarningProps {
  moreTime: (number: number) => void;
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>
}

function Warning({ moreTime, setIsFinish }: WarningProps) {
  const audio1 = new Audio(sound);
  const audio2 = new Audio(sound2);

  return (
    <WarningModal>
      <div>
        <WarningIcon />
        <h1>Tempo finalizado!</h1>
        <h2>Você precisa de mais alguns minutos?</h2>
      </div>
      <ButtonsDiv style={{flexDirection: "row"}}>
        <WarningPlusBox
          onClick={ () => {
            audio1.play();
            setIsFinish(false);
          }}
        >
          <CrossIcon />
          Sair
        </WarningPlusBox>

        <WarningPlusBox
          onClick={ () => {
            audio2.play();
            moreTime(5);
          }}
        >
          <PlusIcon />
          5 Min
        </WarningPlusBox>

        <WarningPlusBox
          onClick={ () => {
            audio2.play();
            moreTime(10);
          }}
        >
          <PlusIcon />
          10 Min
        </WarningPlusBox>
      </ButtonsDiv>
    </WarningModal>
  );
}

export default Warning;