import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='your email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='create-account'>New to Ema-john? <Link to='/signup'>Create New Account</Link> </p>
            <hr />
            <input className='btn-submit' type="submit" value="Login with Google" />
        </div>
    );
};

export default Login;