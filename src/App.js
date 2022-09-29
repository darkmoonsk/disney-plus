import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
