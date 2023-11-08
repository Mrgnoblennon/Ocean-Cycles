
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';

// Components

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages

import Home from './components/Pages/Home';


function App() {
  return (
    <div>
        <Header/>
          <Home/>
        <Footer/>
    </div>
        
  );
}

export default App;
