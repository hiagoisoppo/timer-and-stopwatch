import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OutletContainer = styled.div`
  width: 100%;  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.fontColor};
  & h1 {
    font-size: 6rem;
    font-weight: bolder;
    letter-spacing: 0.6rem;
    background: -webkit-linear-gradient(${props => props.theme.colors.fontGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 600px) {
    & h1 {
      font-size: 3rem;
      letter-spacing: 0.2rem;
    }
    & h2 {
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  height: 100px;
  width: 100px;
  border-radius: 15px 2px;
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: ${props => props.theme.colors.hoverBackground};
    transform: scale(1.2);
    color: ${props => props.theme.colors.hover};
    svg {
      stroke: ${props => props.theme.colors.hover};
    }
  }
  @media only screen and (max-width: 600px) {
    &:hover {
      transform: scale(0.8);
    }
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  @media only screen and (max-width: 600px) {
    gap: 0px;
    margin-bottom: 10px;
  }
`;

export const NumbersDiv = styled.div`
  display: flex;
  margin: 15px;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin: 5px;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15px 20px;
  @media only screen and (max-width: 600px) {
    padding: 5px 5px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    & svg {
      width: 30px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 15px 2px;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.colors.hover};
    background-image: ${props => props.theme.colors.hoverBackground};
      svg {
      stroke: ${props => props.theme.colors.hover};
      transform: rotate(15deg);
    }
  }
  @media only screen and (max-width: 600px) {
    &:hover {
      transform: scale(0.8);
    }
  }
`;

export const StyledNavBar = styled.nav`
  height: 60px;
  display: flex;
  gap: 30px;
  justify-content: left;
  @media only screen and (max-width: 600px) {
    height: 50px;
    gap: 0px;
  }
`;

export const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  font-size: 15rem;
  font-weight: 500;
  & span {
    background: -webkit-linear-gradient(${props => props.theme.colors.fontGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 600px) {
    width: 120px;
    font-size: 8rem;
  }
`;

export const StyledCounter2 = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  font-size: 15rem;
  font-weight: 500;
  & span {
    background: -webkit-linear-gradient(${props => props.theme.colors.fontGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 600px) {
    width: 100px;
    font-size: 5rem;
  }
`;

export const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15rem;
  font-weight: 500;
  & span {
    background: -webkit-linear-gradient(${props => props.theme.colors.fontGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const DarkModeBtn = styled.div`
    padding: 5px;
    cursor: pointer;
    height: 60px;
    transition: all 300ms ease-in-out;
    border-radius: 15px 2px;
    &:hover {
      background-image: ${props => props.theme.colors.hoverBackground};
      transform: scale(1.2);
      svg {
      stroke: ${props => props.theme.colors.hover};
      transform: rotate(15deg);
    }
    }
    @media only screen and (max-width: 600px) {
    &:hover {
      transform: scale(0.8);
    }
  }
  `;

  export const StyledInput = styled.input`
    font-family: 'Bebas Neue', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    font-size: 15rem;
    font-weight: 500;
    background: -webkit-linear-gradient(${props => props.theme.colors.fontGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: none;
    outline: none;
    filter: opacity(60%);
    &:focus {
      filter: opacity(100%);
      color: white;
    }
    @media only screen and (max-width: 600px) {
    font-size: 8rem;
    width: 120px;
  }
  `;

export const PlusBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  cursor: pointer;
  height: 50px;
  width: 100px;
  border-radius: 15px 2px;
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: ${props => props.theme.colors.hoverBackground};
    transform: scale(1.2);
    color: ${props => props.theme.colors.hover};
    svg {
      stroke: ${props => props.theme.colors.hover};
    }
  }
  & svg {
    width: 30px;
  }
  @media only screen and (max-width: 600px) {
    width: 80px;
    & svg {
      width: 25px;
    }
    &:hover {
      transform: scale(0.8);
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: end;
  align-items: center;
  gap: 15px;
  & span {
    border-left: 1px solid white;
    width: 230px;
    text-align: right;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    justify-content: center;
    gap: 0px;
    & span {
      text-align: center;
    }
  }
`;

export const FooterBtnBox = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  cursor: pointer;
  height: 50px;
  width: 100px;
  border-radius: 15px 2px;
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: ${props => props.theme.colors.hoverBackground};
    transform: scale(1.2);
    color: ${props => props.theme.colors.hover};
    svg {
      stroke: ${props => props.theme.colors.hover};
    }
  }
  & svg {
    width: 30px;
  }
  @media only screen and (max-width: 600px) {
    &:hover {
      transform: scale(0.8);
    }
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15rem;
  font-weight: 500;
  align-items: center;
  height: 100%;
  & span {
    background: -webkit-linear-gradient(${props => props.theme.colors.fontGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* @media only screen and (max-width: 600px) {
    background-color: blue;
  } */
`;

export const WarningModal = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  & svg {
    stroke: ${props => props.theme.colors.font};
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const WarningPlusBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  cursor: pointer;
  height: 60px;
  width: 80px;
  border-radius: 15px 2px;
  transition: all 300ms ease-in-out;
  &:hover {
    background-image: ${props => props.theme.colors.hoverBackground};
    transform: scale(1.2);
    color: ${props => props.theme.colors.hover};
    svg {
      stroke: ${props => props.theme.colors.hover};
    }
  }
  & svg {
    width: 30px;
  }   
`;