import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Routes from './config/routes';

function App() {
  return(
    <div className="main-container">
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;