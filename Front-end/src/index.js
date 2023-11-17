import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { About } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/ContactUs/ContactUs';
//import { BookList } from './components/BookList/bookList';
//import { BookList } from './components/BookDetails/bookList';
import { Categories } from './pages/Categories/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        
        <Route path='categories' element= {<Categories/>} />
        <Route path='about' element = {<About/>} />
        <Route path='contact' element ={<Contact/>}/>
        {/* <Route path='BookList' element= {<BookList/>} /> */}
      </Route>

    </Routes>
  </BrowserRouter>
);


