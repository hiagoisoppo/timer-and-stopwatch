import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  const StyledNavLink = styled(NavLink)`
    text-decoration: none;
  `;

  return (
    <nav>
      <StyledNavLink to="/timer">
        Timer
      </StyledNavLink>
      <StyledNavLink to="/stopwatch">
        Stopwatch
      </StyledNavLink>
    </nav>
  )
}

export default Navbar;