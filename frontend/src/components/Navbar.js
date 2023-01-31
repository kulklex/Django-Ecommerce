import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { logout, } from '../redux/actions/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
   
    const dispatch = useDispatch()
    const location = useLocation()


    const LogOut = (<a className='navbar__top__auth__link' href='/' onClick={dispatch(logout())}> LogOut </a>)

    const Auth = (<>
        <a className='navbar__top__auth__link' href='/api/token'>Sign In</a>
        <a className='navbar__top__auth__link' href='/api/accounts/signup'>Sign Up</a>
    </>)

   
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [location]);

    return (
        <>
            <div className="navbar">
                <div className="navbar__top">
                    <div className="navbar__top__logo">
                        <Link className='navbar__top__logo__link' to='/'>Real Estate</Link>
                    </div>
                    <div className="navbar__top__auth">
                        {!user?.isLoading && (<>{user?.isAuthenticated ? LogOut : Auth}</>)}
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
                    <li className="navbar_bottom_item">
                        <NavLink className='navbar__bottom__item__link' to='/contact'>Contact</NavLink>
                    </li>
                </div>
            </div>
        </>
    );
}

export default Navbar;
