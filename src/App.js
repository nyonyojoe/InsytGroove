import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styled from 'styled-components'
import Login from './components/Login'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <LoginPage />
  )
}

const Container = styled.div`
width:100vw;
`;

export default App