import React from 'react';
import Navbar from './Navbar';

const Outlet = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    );
}

export default Outlet;
