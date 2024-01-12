import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='store' element={<OurStore />}/>
          <Route path='blogs' element={<Blogs />}/>
          <Route path='blogs/:id' element={<SingleBlog />}/>
          <Route path='compare-products' element={<CompareProducts />}/>
          <Route path='wishlist' element={<Wishlist />}/>
          <Route path='login' element={<Login />}/>
          <Route path='forgot-password' element={<ForgotPassword />}/>
          <Route path='sign-up' element={<SignUp />}/>
          <Route path='reset-password' element={<ResetPassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
