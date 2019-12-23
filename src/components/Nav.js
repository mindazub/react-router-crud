import React from 'react';
import { Link } from 'react-router-dom';

const myStyle = {
    color: 'white'
}


function Nav() {
  return (
    <nav>
        <Link to="/" style={myStyle}>
            <h3>Logo</h3>
        </Link>
            <ul className="nav-links">
                <Link to="/about" style={myStyle}>
                    <li >About</li>
                </Link>
                <Link to="/shop" style={myStyle}>
                    <li >Shop</li>
                </Link>
            </ul>
    </nav>
  );
}

export default Nav;
