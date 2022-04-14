import React from 'react';
import { Header, Intro, Navigation, Projects, Biography, Contact, Footer } from './components/Index';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className=" ">
        <Intro />
        <Navigation />
      </div>
      <Projects />
      <Biography />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
