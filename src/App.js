import React from 'react';
import Routes from "./containers/Routes"
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header >
        <Navbar/>
      </header>
      <main>
        <Routes/>
      </main>
      
      </React.Fragment>
  );
}

export default App;
