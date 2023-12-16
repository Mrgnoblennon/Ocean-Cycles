import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter } from "react-router-dom";
import theme from './theme';

const stripePromise = loadStripe('pk_test_51ONolpAabHUJMT8K68YtjR5PZkhaCkRHhgJFMlLoVYcrsf0De09kLog06iJllcdFnjTQ2yl1FpY348ikD9hsFq9L00Htr2eRCN');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
        
          <App /> 
        
        </BrowserRouter>
      </Elements>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
