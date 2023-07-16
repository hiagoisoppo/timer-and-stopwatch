import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Timer from './pages/Timer'
import StopWatch from './pages/StopWatch'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/' element={<Timer />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/stopwatch' element={<StopWatch />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
