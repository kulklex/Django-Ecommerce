import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { signup } from '../redux/actions/auth';
import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
        name: '', email: '', password: '', password2: ''
    })

    const {name, email, password, password2} = formData

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup({name, email, password, password2}, navigate))
    }


    return (
        <div className='auth'>
            <Helmet>
                <title>Real-Estate Login</title>
                <meta name='description' content='signup page'/>
            </Helmet>
        <div className="auth__title">Sign Up</div>
        <div className="auth__lead">Create your Account</div>
        <form className='auth__form' onSubmit={(e) => handleSubmit(e)}>
            <div className="auth__form__group">
                <input type="text" name='name' placeholder='Name' value={name} className="auth__form__input" required onChange={e => handleChange(e)} minLength={6}/>
            </div>
            <div className="auth__form__group">
                <input type="email" name='email' placeholder='Email' value={email} className="auth__form__input" required onChange={e => handleChange(e)}/>
            </div>
            <div className="auth__form__group">
                <input type="password" name='password' placeholder='Password' value={password} className="auth__form__input" required onChange={e => handleChange(e)} minLength={6}/>
            </div>
            <div className="auth__form__group">
                <input type="password" name='password2' placeholder='Confirm Password' value={password2} className="auth__form__input" required onChange={e => handleChange(e)} minLength={6}/>
            </div>
            <button className="auth__form__button">Register</button>
        </form>
        <div className="auth__authtext">
            Already have an account? <Link className='auth__authtext_link' to='/login'>Sign In</Link>
        </div>
    </div>
    );
}

export default SignUp;
