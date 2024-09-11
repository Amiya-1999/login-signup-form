import React, { useState } from 'react'

function AuthForm() {

    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signUpData, setSignUpData] = useState({ email: '', password: '', confPassword: '' });
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);

    const handleLoginChange = ((e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.email === '' || loginData.password === '')
            alert('All fields are Mandatory');
        else {
            setIsLoginSuccess(true);
            setLoginData({ email: '', password: '' });
        }
    }

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (signUpData.email === '' || signUpData.password === '' || signUpData.confPassword === '')
            alert('All fields are Mandatory');
        else {
            if (signUpData.password !== signUpData.confPassword)
                alert('Confirm Password should be same as Entered Password');
            else {
                setIsLoginSuccess(true);
                setSignUpData({ email: '', password: '', confPassword: '' });
            }
        }
    }

    return (
        <>
            <div className="container">
                {!isLoginSuccess ?
                    <div className="form-container">
                        <div className="form-toggle">
                            <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
                            <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
                        </div>
                        {isLogin ? (<>
                            <div className="form">
                                <h2>Login Form</h2>
                                <input type="email" placeholder='Email' name='email' value={loginData.email} onChange={handleLoginChange} required />
                                <input type="password" placeholder='Password' name='password' value={loginData.password} onChange={handleLoginChange} required />
                                <a href="#">Forgot Password?</a>
                                <button onClick={handleLogin}>Login</button>
                                <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)}>Signup Now</a></p>
                            </div>
                        </>) : (<>
                            <div className="form">
                                <h2>Signup Form</h2>
                                <input type="email" placeholder='Email' name='email' value={signUpData.email} onChange={handleSignUpChange} required />
                                <input type="password" placeholder='Password' name='password' value={signUpData.password} onChange={handleSignUpChange} required />
                                <input type="password" placeholder='Confirm Password' name='confPassword' value={signUpData.confPassword} onChange={handleSignUpChange} required />
                                <button onClick={handleSignUp}>SignUp</button>
                            </div>
                        </>)}
                    </div> : <div className='welcomePage'>
                        <h2>Welcome to our Application</h2>
                        <button onClick={() => setIsLoginSuccess(false)}>Go Back</button>
                    </div>
                }
            </div>
        </>
    )
}

export default AuthForm