
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import styles from "./page.module.css";



export default function Plans() {
  const router = useRouter();

  const buyfunction = async () => {
    try {
        // const response = await fetch('http://localhost:3001/api/signup', {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment`, {
      
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ plan, price }),
  
  });
  const result = await response.json();
  
  if (response.ok) {
      console.log(response.data)
  } else {
    console.error('payment failed', data);
  }
} catch (error) {
  console.error('An error occurred', error);
}
  };


  return (
    <main >
        
         <button onClick={buyfunction}>
           buy now
         </button>
    </main>
  );
}
