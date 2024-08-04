'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle errors
  const router = useRouter(); // Initialize router

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error state

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful login
        alert('Login successful!');
        router.push('/'); 
      } else {
        // Handle errors
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <section className={`${styles['vh-100']} ${styles['gradient-custom']}`}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" 
                    className="form-control form-control-lg" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>



                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" 
                    className="form-control form-control-lg" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password..."

                    />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>

                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a href="#!" className="text-white mx-4 px-2">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <FontAwesomeIcon icon={faGoogle} size="lg" />
                    </a>
                  </div>

                </div>

                <div>
                  <p className="mb-0">Don't have an account? <Link href="/auth/signup" className="text-white-50 fw-bold">Sign Up</Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  



// <main className={styles.main}>
// <div className={styles.container}>
//   <h1 className={styles.heading}>Log in</h1>
//   <form className={styles.form} onSubmit={handleSubmit}>
//     <div className="mb-3">
//       <label htmlFor="email" className="form-label">
//         Email <span className="text-danger">*</span>
//       </label>
//       <input
//         type="email"
//         className="form-control"
//         id="email"
//         placeholder="name@example.com"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="password" className="form-label">
//         Password <span className="text-danger">*</span>
//       </label>
//       <input
//         type="password"
//         className="form-control"
//         id="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//     <div className="mb-3 form-check">
//       <input type="checkbox" className="form-check-input" id="keepLoggedIn" />
//       <label className="form-check-label" htmlFor="keepLoggedIn">
//         Keep me logged in
//       </label>
//     </div>
//     <button type="submit" className="btn btn-primary w-100">
//       Log in now
//     </button>
//     <div className="d-flex justify-content-between mt-3">
//       <a href="/auth/signup">Create new account</a>
//       <a href="/auth/forgot-password">Forgot password</a>
//     </div>
//     <hr className="my-4" />
//     <div className="text-center">
//       <span>Or sign in with</span>
//     </div>
//     <div className="d-flex justify-content-around mt-3">
//       <button type="button" className="btn btn-outline-primary">
//         <i className="bi bi-google"></i> Google
//       </button>
//       <button type="button" className="btn btn-outline-primary">
//         <i className="bi bi-facebook"></i> Facebook
//       </button>
//       <button type="button" className="btn btn-outline-primary">
//         <i className="bi bi-twitter"></i> Twitter
//       </button>
//     </div>
//   </form>
// </div>
// </main>