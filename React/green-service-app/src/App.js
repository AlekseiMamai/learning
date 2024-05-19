import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contacts from './pages/pageContacts/Contacts';
import About from './pages/pageAbout/About'
import Status from './pages/pageStatus/Status';

import './styles/app.css'


function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Contacts' element={<Contacts />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Status' element={<Status />}/>
        </Routes>
      </BrowserRouter>

  );
};

export default App;
