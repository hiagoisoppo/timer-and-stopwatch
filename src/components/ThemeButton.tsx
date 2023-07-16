import { SunIcon, MoonIcon} from "../assets/Icons";
import { DarkModeBtn } from "../assets/StyledComponents";

interface ThemeBtnProps {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
}

function ThemeButton({ setTheme, isDark }: ThemeBtnProps) {
  return(
    <DarkModeBtn
      onClick={() => {
        setTheme((prevTheme) => !prevTheme)
      }}
    >
      { isDark ? <MoonIcon />
      : <SunIcon /> }
    </DarkModeBtn>
  );
}

export default ThemeButton;