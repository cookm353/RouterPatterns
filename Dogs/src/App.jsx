import { BrowserRouter } from "react-router-dom"

import Routes from './Routes'
import Nav from "./Nav"

import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes />     
      </BrowserRouter>
    </>
  )
}

export default App
