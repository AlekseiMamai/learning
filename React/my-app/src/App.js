import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

import './styles/app.css'

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
  );
};

export default App;
