import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
        <Link to="/main/About" className="nav-button">
            About Us
        </Link>
        <br />
        <Link to="/main/setup" className="nav-button">
            Setup your Page
        </Link>
        <br />
        {/* 
    <Link to="/main/test" className="nav-button">Testing Grounds</Link><br/> */}
        <Link to="/site/kevin" className="nav-button">
            example
        </Link>
        <br />
        <Link to="/main/delete" className="nav-button">
            Remove a Website
        </Link>
        <br />
    </div>
);

export default Nav;
