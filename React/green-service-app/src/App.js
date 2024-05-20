import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Contacts from './pages/pageContacts/Contacts';
import About from './pages/pageAbout/About'
import Status from './pages/pageStatus/Status';
import Laptop from './pages/pageLaptop/Laptop';
import Phone from './pages/pagePhone/Phone';
import Console from './pages/pageConsole/Console';
import Tablet from './pages/pageTablets/Tablet';
import Acer from './pages/pageTablets/Products/Acer/Acer';
import AppleT from './pages/pageTablets/Products/Apple/Apple';
import AppleD from './pages/pageDesktop/Products/Apple/Apple';
import Hp from './pages/pageTablets/Products/HP/Hp';
import Lenovo from './pages/pageTablets/Products/Lenovo/Lenovo';
import LenovoD from './pages/pageDesktop/Products/Lenovo/Lenovo';
import Ritmix from './pages/pageTablets/Products/Ritmix/Ritmix';
import Samsung from './pages/pageTablets/Products/Samsung/Samsung';
import Sony from './pages/pageTablets/Products/Sony/Sony';

import './styles/app.css'
import AsusD from './pages/pageDesktop/Products/Asus/Asus';
import Desktop from './pages/pageDesktop/Desktop';
import DellD from './pages/pageDesktop/Products/Dell/Dell';
import HpD from './pages/pageDesktop/Products/Hp/Hp';
import MSID from './pages/pageDesktop/Products/MSI/MSI';
import AsusP from './pages/pagePhone/Products/Asus/Asus';
import AppleP from './pages/pagePhone/Products/Apple/Apple';
import HpP from './pages/pagePhone/Products/Hp/Hp';
import LenovoP from './pages/pagePhone/Products/Lenovo/Lenovo';
import LgP from './pages/pagePhone/Products/Lg/Lg';
import SamsungP from './pages/pagePhone/Products/Samsung/Samsung';
import SonyP from './pages/pagePhone/Products/Sony/Sony';
import AppleL from './pages/pageLaptop/Products/Apple/Apple';
import AsusL from './pages/pageLaptop/Products/Asus/Asus';
import DellL from './pages/pageLaptop/Products/Dell/Dell';
import HpL from './pages/pageLaptop/Products/Hp/Hp';
import LenovoContentL from './pages/pageLaptop/Products/Lenovo/Lenovo';
import MSIL from './pages/pageLaptop/Products/MSI/MSI';
import SamsungL from './pages/pageLaptop/Products/Samsung/Samsung';
import SonyL from './pages/pageLaptop/Products/Sony/Sony';
import PlayStation from './pages/pageConsole/Products/PlayStation/PlayStation';
import Nintendo from './pages/pageConsole/Products/Nintendo/Nintendo';
import Xbox from './pages/pageConsole/Products/Xbox/Xbox';

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Contacts' element={<Contacts />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Status' element={<Status />}/>
          <Route path='/Tablets' element={<Tablet />}/>
                <Route path='/Tablets/Acer' element={<Acer />}/>
                <Route path='/Tablets/Apple' element={<AppleT />}/>
                <Route path='/Tablets/HP' element={<Hp />}/>
                <Route path='/Tablets/Lenovo' element={<Lenovo />}/>
                <Route path='/Tablets/Ritmix' element={<Ritmix />}/>
                <Route path='/Tablets/Samsung' element={<Samsung />}/>
                <Route path='/Tablets/Sony' element={<Sony />}/>
          <Route path='/Phones' element={<Phone />}/>
                <Route path='/Phones/Asus' element={<AsusP />}/>
                <Route path='/Phones/Apple' element={<AppleP />}/>
                <Route path='/Phones/HP' element={<HpP />}/>
                <Route path='/Phones/Lenovo' element={<LenovoP />}/>
                <Route path='/Phones/LG' element={<LgP />}/>
                <Route path='/Phones/Samsung' element={<SamsungP />}/>
                <Route path='/Phones/Sony' element={<SonyP />}/>
          <Route path='/Desktops' element={<Desktop />}/>
                <Route path='/Desktops/Asus' element={<AsusD />}/>
                <Route path='/Desktops/Apple' element={<AppleD />}/>
                <Route path='/Desktops/Dell' element={<DellD />}/>
                <Route path='/Desktops/Hp' element={<HpD />}/>
                <Route path='/Desktops/Lenovo' element={<LenovoD />}/>
                <Route path='/Desktops/MSI' element={<MSID />}/>
          <Route path='/Laptops' element={<Laptop />}/>
                <Route path='/Laptops/Apple' element={<AppleL />}/>
                <Route path='/Laptops/Asus' element={<AsusL />}/>
                <Route path='/Laptops/Dell' element={<DellL />}/>
                <Route path='/Laptops/HP' element={<HpL />}/>
                <Route path='/Laptops/Lenovo' element={<LenovoContentL />}/>
                <Route path='/Laptops/MSI' element={<MSIL />}/> 
                <Route path='/Laptops/Samsung' element={<SamsungL />}/>        
                <Route path='/Laptops/Sony' element={<SonyL />}/> 
          <Route path='/Consoles' element={<Console />}/>
                <Route path='/Consoles/PlayStation' element={<PlayStation />}/>
                <Route path='/Consoles/Nintendo' element={<Nintendo />}/>
                <Route path='/Consoles/Xbox' element={<Xbox />}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
