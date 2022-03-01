import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styled from 'styled-components'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
    <Container>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<h1>LoginPage</h1>} />
          <Route path='/signup' element={<h1>Signup Page</h1>} />
      </Routes>
    </Container>
</Router>
  )
}

const Container = styled.div`
width:100vw;
`;

export default App