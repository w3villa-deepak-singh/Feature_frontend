
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from './component/Navbar';
import HomePage from './component/HomePage';
import { ToastContainer, toast } from 'react-toastify';

import './page.module.css'

export default function Home() {
  const router = useRouter();



  return (
    <section >
         <ToastContainer 
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

         <Header />
         <HomePage />
    </section>
  );
}
