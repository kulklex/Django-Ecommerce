import React from 'react';
import Navbar from './Navbar';

const Outlet = (props) => {
    return (
        <div>
            <Navbar/>
            <br/>
            {props.children}
        </div>
    );
}

export default Outlet;
