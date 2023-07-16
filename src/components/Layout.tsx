import { useState } from "react";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme } from '../styles/themes';

import Navbar from "./Navbar";
import ThemeButton from "./ThemeButton";

import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyle";
import { LayoutContainer, HeaderContainer, FooterContainer, FooterBtnBox } from "../assets/StyledComponents";
import { GithubIcon, LinkedinIcon } from "../assets/Icons";

function Layout() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
       <GlobalStyle />
      <LayoutContainer>
        <HeaderContainer>
          <Navbar />
          <ThemeButton setTheme={ setIsDarkTheme } isDark={isDarkTheme} />
        </HeaderContainer>
        <Outlet />
        <FooterContainer>
          <FooterBtnBox
            href="https://github.com/hiagoisoppo"
            target="blank"
          >
            <GithubIcon />
            github
          </FooterBtnBox>
          <FooterBtnBox
            href="https://www.linkedin.com/in/hiagoisoppo/"
            target="blank"
          >
            <LinkedinIcon />
            linkedin
          </FooterBtnBox>
          <span>Desenvolvido por Hiago Isoppo Trajano</span>
        </FooterContainer>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout;