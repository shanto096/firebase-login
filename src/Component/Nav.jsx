import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'><span style={{margin:'2rem'}}>Home</span></Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Nav;