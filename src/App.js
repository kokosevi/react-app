import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import PollWindow from "./components/PollWindow";
import About from "./pages/About";
import Home from "./pages/Home";
import PollSalient from "./pages/PollSalient";
import { Route, Routes } from "react-router-dom";
import PollMeasure from './pages/PollMeasure';
import PollResult from "./pages/PollResult"


function App() {
  
  return (
    <>
    <div className='App'>
      <Nav />
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/PollSalient' element={<PollSalient/>} />
      <Route path='/PollMeasure' element={<PollMeasure/>} />
      <Route path='/PollResult' element={<PollResult/>} />
    </Routes>
    </>
    

  );
}

export default App;
