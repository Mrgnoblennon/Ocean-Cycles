
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Components

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import PaymentForm from './components/Form/PaymentForm';

// Pages

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import EBikes from './components/Pages/EBikes';
import Prices from './components/Pages/Prices';
import Book from './components/Pages/Book';
import Contact from './components/Pages/Contact';

// Stipe section
const stripePromise = loadStripe('pk_test_51ONolpAabHUJMT8K68YtjR5PZkhaCkRHhgJFMlLoVYcrsf0De09kLog06iJllcdFnjTQ2yl1FpY348ikD9hsFq9L00Htr2eRCN');


function App() {

  return (

    <div>
      <ApolloProvider client={client}>
          <Header/>
            <Elements stripe={stripePromise}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/ebikes" element={<EBikes/>}/>
                <Route path="/prices" element={<Prices/>}/>
                <Route path="/book" element={<Book/>}/>
                <Route path="/Contact" element={<Contact/>}/>
              </Routes>
            </Elements>
          <Footer/>       
      </ApolloProvider> 
    </div>
 
        
  );
}

export default App;
