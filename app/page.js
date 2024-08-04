
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";



export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        // Clear token and user data from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        alert('You have been logged out successfully.');
        router.push('/auth/login'); // Redirect to login page or home page
      } else {
        alert(data.message || 'Failed to log out');
      }
    } catch (error) {
      console.error('An error occurred', error);
      alert('An error occurred while logging out. Please try again.');
    }
  };


  return (
    <main className={styles.main}>
         <h1> hello</h1>
         <button onClick={handleLogout}>
           Logout
         </button>
    </main>
  );
}
