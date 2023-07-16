import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const OutletContainer = styled.div`
  padding: 50px;
  width: 100%;  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
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
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const NumbersDiv = styled.div`
  display: flex;
  margin: 15px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15px 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
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
`;

export const StyledNavBar = styled.nav`
  height: 60px;
  display: flex;
  gap: 30px;
  justify-content: left;
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
  `;

  export const StyledInput = styled.input`
    font-family: 'Bebas Neue', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 250px;
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
`;
