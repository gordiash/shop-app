import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import Routes from "./containers/Routes";

import Footer from "./components/Footer/Footer"

function App() {
  return (
    <React.Fragment>
      <header className="Header">
        <Navbar />
      </header>
      
     
        <Routes />
      
     


    <Footer/>


    </React.Fragment>
  );
}

export default App;
