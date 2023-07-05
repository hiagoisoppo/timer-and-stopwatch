import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

import styled from "styled-components"


function Layout() {
  const LayoutContainer = styled.div`
  background-color: red;
  `


  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
    </LayoutContainer>
  )
}

export default Layout;