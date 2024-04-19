import React from 'react'
import { useState } from 'react'
import '../Pages/Login.css'
import { Link , Navigate , useNavigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '@/firebase/auth'
// import { useAuth } from '@/contexts/authcontexts/ContextIndex'


const SignUp = () => {

    // const { userLoggedin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister , setIsRegister] = useState(false)

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        if(!isRegister){
            setIsRegister(true)
            await doCreateUserWithEmailAndPassword(email,password)
            console.log('user created!!')
            navigate('/')
        }
    };
    return (
        <>
            {/* {userLoggedin && ( <Navigate to={'./LandingPage.jsx'} replace={true}/>)} */}
            <section className="signup w-screen h-screen">
                <div className="login-container flex ">
                    <div className='left-container'>
                        <h1 className='font-bold  poppins-extrabold'>
                            Welcome <br /> to Evolve!
                        </h1>
                    </div>
                    <div className="right-container">
                        <div className='heading'>
                            <h1>Signup</h1>
                            <span>Create your account</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="username-div">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="username"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="username-div">
                                <label htmlFor="username">Password</label>
                                <input
                                    type='password'
                                    id="username"
                                    name="username"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>

                            <div className="password-div">
                                <label htmlFor="password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                />
                            </div>
                            <button className='login-btn'>signup</button>
                        </form>
                        <div className="sign-link">
                            <span className="left-text text-slate-500 poppins-light">already a user ?</span>
                            <Link to="/login" >
                                <span className="right-text text-amber-600  poppins-light ">Login</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp