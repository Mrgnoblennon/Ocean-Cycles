
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';

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
      <ApolloProvider client={client}>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/ebikes" element={<EBikes/>}/>
            <Route path="/prices" element={<Prices/>}/>
            <Route path="/book" element={<Book/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        <Footer/>
      </ApolloProvider>
    </div>
 
        
  );
}

export default App;
