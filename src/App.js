import React, { useState, useEffect } from "react";

import Play from "./Play";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Rules from "./Rules";
import Header from "./Header";
import Result from "./Result";

export default function App() {
  const [pick, setPick] = useState('')
  const [score, setScore] = useState(0)
  const [rules, setRules] = useState(false)
  const [house, setHouse] = useState('')
  
   

  useEffect(() => {
    setScore(JSON.parse(window.localStorage.getItem('number')));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('number', score);
  }, [score]);

  return (
    <div className="app">
      <Header score={score} />
      <Rules rules={rules} setRules={setRules} />
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Play setPick={setPick} pick={pick} />} />
          <Route exact path='/result' element={<Result pick={pick} house={house} setHouse={setHouse} setScore={setScore} />} />
        </Routes>
      </BrowserRouter>
      <div className="footer" onClick={() => setRules(true)}>
        <button className="btn" >RULeS</button>
      </div>

    </div>
  )
}


