import { React, useState } from 'react'
import '../Pages/Login.css'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '@/firebase/auth';
import { useAuth } from '@/contexts/authcontexts/ContextIndex';

export const Login = () => {

  const userLoggedIn = useAuth()
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignin, setIsSignIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('siuuuuuuuuuuu')



    if (!isSignin) {
      setIsSignIn(true)
      await doSignInWithEmailAndPassword(username, password)
      console.log('User Logged in !!')
      navigate('/')
    }

  };

  const onGoogleSignIn = (e) => {
    e.preventDefault()

    if (!isSignin) {
      setIsSignIn(true)
      doSignInWithGoogle().catch((err) => {
        setIsSignIn(false)
      })
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };


  return (
    <>
      {/* {userLoggedIn && (<Navigate to={'/LandingPage'} replace={true} />)} */}
      <section className='login-page w-screen h-screen'>
        <div className="login-container flex ">
          <div className='left-container'>
            <h1 className='font-bold  poppins-extrabold'>
              Welcome <br /> Back!
            </h1>
          </div>
          <div className="right-container">
            <div className='heading'>
              <h1>Login</h1>
              <span>Welcome Back ! Please Login to your account</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="username-div">
                <label htmlFor="username">Email</label>
                <input
                  text='email'
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>

              <div className="password-div">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="forgot-password-div">
                <span className='text-xs  '>forgot password?</span>
              </div>

              <button className='login-btn'>Login</button>
            </form>
            <div className="sign-link">
              <span className="left-text text-slate-500 poppins-light">new user ?</span>
              <Link to="/signup" >
                <span className="right-text text-amber-600  poppins-light ">SignUp</span>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
