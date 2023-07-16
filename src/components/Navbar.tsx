import { TimerIcon, StopWatchIcon } from "../assets/Icons";
import { StyledNavBar, StyledNavLink } from "../assets/StyledComponents";



function Navbar() {
  return (
    <StyledNavBar>
      <StyledNavLink to="/timer">
        <TimerIcon />
        Timer
      </StyledNavLink>
      <StyledNavLink to="/stopwatch">
        <StopWatchIcon />
        StopWatch
      </StyledNavLink>
    </StyledNavBar>
  )
}

export default Navbar;