
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Output } from './link'
import Home from './Home';
import Product from './Product';

function Router_link(){
  return (
  <>
  < BrowserRouter>
  <Routes>
  
  <Route path='/' element={<Output/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default Router_link;
