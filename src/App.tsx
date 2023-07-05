import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Timer from './pages/Timer'
import StopWatch from './pages/StopWatch'
import NotFound from './pages/NotFound'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyle'
import { darkTheme, lightTheme } from './styles/themes'
import { useState } from 'react'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true); 

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Timer} />
          <Route path='/timer' Component={Timer} />
          <Route path='/stopwatch' Component={StopWatch} />
        </Route>
        <Route path='/*' Component={NotFound} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
