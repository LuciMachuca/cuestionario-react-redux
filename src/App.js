import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './component/results';
import Home from './component/home';



function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="results" element={<Results />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;