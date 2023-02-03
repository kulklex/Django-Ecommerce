import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import { login } from '../redux/actions/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email, password}, navigate))
    }


    return (
        <div className='auth'>
            <Helmet>
                <title>Real-Estate Login</title>
                <meta name='description' content='login page'/>
            </Helmet>
            <div className="auth__title">Sign In</div>
            <div className="auth__lead">Sign into your Account</div>
            <form className='auth__form' onSubmit={(e) => handleSubmit(e)}>
                <div className="auth__form__group">
                    <input type="email" name='email' placeholder='Email' value={email} className="auth__form__input" required onChange={e => handleChange(e)}/>
                </div>
                <div className="auth__form__group">
                    <input type="password" name='password' placeholder='Password' value={password} className="auth__form__input" required onChange={e => handleChange(e)} minLength={6}/>
                </div>
                <button className="auth__form__button">Login</button>
            </form>
            <div className="auth__authtext">
                Don't have an account? <Link className='auth__authtext_link' to='/signup'>Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
