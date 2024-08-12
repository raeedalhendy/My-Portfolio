import React from 'react';
import Nav from './Nav/Nav'
import Home from './Home';
import Footer from './Footer/Footer';

export default function MainLayout() {
  return (
    <div className='bg-gradient-to-r from-blue-50 via-blue-100 to-white dark:from-[#1E293B] dark:via-[#334155] dark:to-[#0F172A] '>
      <Nav /> 
      <Home />
      <Footer/>
    </div>
  );
}