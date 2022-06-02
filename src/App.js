import React from 'react'
import { Footer, Blog, Features, WhatGPT3, Header, Possibilty } from './containers'
import { CTA, Brand, NavBar } from './components'
import './App.css'


function App() {

  return (
    <div className='App' >
      <div className='gradient__bg' >
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer /> 
    </div>
  );
}

export default App;
