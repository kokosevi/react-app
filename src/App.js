import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import PollWindow from "./components/PollWindow";
import About from "./pages/About";
import JungTheory from "./pages/JungTheory";
import Home from "./pages/Home";
import PollSalient from "./pages/PollSalient";
import PollShortSalient from "./pages/PollShortSalient";
import { Route, Routes } from "react-router-dom";
import PollMeasure from './pages/PollMeasure';
import PollResult from "./pages/PollResult";

import {pollData, pickedHandler} from "./DataSource";
import { useState } from "react";



function App() {

// const [PollData, setPollData] = useState(pollData);

// function setPollData() {

//   pickedHandler(categoryIndex, statementIndex) 
//   let data = {...PollData};
// }
   
//   active_umfrage = "umfrage1"



//   resultSummary= [
//     "umfrage1"
//   ];

  // resultHandler(categoryIndex, statementIndex) {
  //   questionnaires[active_umfrage][categoryIndex][statementIndex].picked = true;
  // };

  

  
  return (
    <>
    <div className='App'>
      <Nav />
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/JungTheory' element={<JungTheory/>} />
      {/* <Route path='/PollSalient' element={<PollSalient polData={questionnaires[active_umfrage]} onStatementSelect={resultHandler} />} /> */}
      <Route path='/PollSalient' element={<PollSalient/>} />
      <Route path='/PollShortSalient' element={<PollShortSalient pollData={pollData} pickedHandler={pickedHandler} />} />
      <Route path='/PollMeasure' element={<PollMeasure/>} />
      <Route path='/PollResult' element={<PollResult/>} />
    </Routes>
    </>
    

  );
}

export default App;
