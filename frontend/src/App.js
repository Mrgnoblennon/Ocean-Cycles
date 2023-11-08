
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';

// Components

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import EBikes from './components/Pages/EBikes';
import Prices from './components/Pages/Prices';
import Book from './components/Pages/Book';
import Contact from './components/Pages/Contact';

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
