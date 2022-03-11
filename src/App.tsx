import React from 'react';
import './StyleSheets/CSS/App.css';
import { Footer } from "./Components/SiteFooter/Footer"
import { Header } from "./Components/Header/Header"
import { Home } from "./Components/Home/Home"

function App() {
  return (
    <div className="layout">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
