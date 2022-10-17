import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='your email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='your password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='create-account'>Already have an account? <Link to='/login'>Login</Link> </p>
            <hr />
            <input className='btn-submit' type="submit" value="Sign up with Google" />
        </div>
    );
};

export default SignUp;