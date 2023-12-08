import { BrowserRouter } from "react-router-dom"

import RouteList from './Routes'
import Nav from "./Nav"
import Dog from "./Dog"
import dogs from "./DogDetails"

import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <RouteList />   
      </BrowserRouter>
      {dogs.map(d => {
        <Dog
          name={d.name}
          age={d.age}
          src={d.src}
          facts={d.facts}
        />
      })}
    </>
  )
}



export default App
