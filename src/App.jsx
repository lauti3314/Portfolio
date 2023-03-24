import reactLogo from './assets/react.svg'
import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Proyects from './Components/Proyects/Proyects';
import About from './Components/About/About';


function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path={"/"} element={<Home/>} />
      <Route exact path={"/proyects"} element={<Proyects/>} />
      <Route exact path={"/about"} element={<About/>} />
      
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
