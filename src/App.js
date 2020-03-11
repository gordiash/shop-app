import React from 'react';
import './App.css';
import SectionAbout from './components/About/SectionAbout';
import Navbar from './components/Navbar/Navbar';
import Subscription from './components/Subscription/Subscription';
import Routes from "./containers/Routes";
import Sugestions from "./components/Sugestions/Sugestions"

function App() {
  return (
    <React.Fragment>
      <header className="Header">
        <Navbar/>
      </header>
      <main>
        <Routes/>
      </main>
      <section className="section-subscription">
        <Subscription/>
      </section>
      <section className="section-about">
      <div className="section-about__title"><h2>About</h2></div>
        <SectionAbout/>
      </section>
      <section className="section-sugestions">
      <div className="section-sugestions__title"><h2>Sugestions</h2></div>
        <Sugestions/>
      </section>
      
      </React.Fragment>
  );
}

export default App;
