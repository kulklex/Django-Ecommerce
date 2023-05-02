import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/auth'
import { Link, NavLink, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

const Navbar = () => {
    const [user, setUser] = useState(localStorage.getItem('token') ? decode(localStorage.getItem('token')) : " ")
    
    const dispatch = useDispatch()
    const location = useLocation()
    
    const handleLogout = (e) => {
        e.stopPropagation()
        dispatch(logout())
        window.location.reload()
    }

    const LogOut = (<a className='navbar__top__auth__link' href='/' onClick={(e) => handleLogout(e)}> Logout </a>)

    const Auth = (<>
        <a className='navbar__top__auth__link' href='/login'>Login</a>
        <a className='navbar__top__auth__link' href='/signup'>Sign Up</a>
    </>)

   
    useEffect(() => {
        setUser(localStorage.getItem('token') ? decode(localStorage.getItem('token')) : " ")
    }, [location]);

    return (
        <>
            <div className="navbar">
                <div className="navbar__top">
                    <div className="navbar__top__logo">
                        <Link className='navbar__top__logo__link' to='/'>Real Estate</Link>
                    </div>
                    <div className="navbar__top__auth">
                        {user?.user_id ? LogOut : Auth}
                    </div>
                </div>
                <div className="navbar__bottom">
                    <li className="navbar__bottom__item">
                        <NavLink className='navbar__bottom__item__link' to='/'>Home</NavLink>
                    </li>
                    <li className="navbar__bottom__item">
                        <NavLink className='navbar__bottom__item__link' to='/listings'>Listings</NavLink>
                    </li>
                    <li className="navbar__bottom__item">
                        <NavLink className='navbar__bottom__item__link' to='/about'>About</NavLink>
                    </li>
                    <li className="navbar__bottom__item">
                        <NavLink className='navbar__bottom__item__link' to='/contact'>Contact</NavLink>
                    </li>
                </div>
            </div>
        </>
    );
}

export default Navbar;
