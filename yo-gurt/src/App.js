import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>

        </Routes>
      </Router>
    </>
  );
}

export default App;
