import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Setup from './containers/setup'; //user enters information to be stored on his profile
import findSite from './components/header/findSite'; //the user's information is used to generate a website. no auth required to view
import LoadSite from './components/view/display'; //the view with the current user's information
import Test from './components/header/test';
import destroy from './components/header/destroy';
import About from './components/header/about';
/* import Nav from './components/header/Navigation';
 */

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

const App = () => (
    <Router>
        <div className="app">
            <Route exact path="/" component={Nav} />
            <Route path="/main" component={Nav} />
            <Route path="/main/about" component={About} />
            <Route path="/main/findSite" component={findSite} />
            <Route path="/about" component={About} />
            <Route path="/main/setup" component={Setup} />
            <Route path="/main/test" component={Test} />
            <Route path="/site/:name" component={LoadSite} />
            <Route path="/main/delete" component={destroy} />
        </div>
    </Router>
);

export default App;

/* 
This page provides basic routing and simple components for the home page display

main:
the main page component. mains the user and provides links to the apps different functionalities
  Links:
    1.about -->
    2.setup: will guide user through entering his data
    3.edit: will take the user to a login screen
    4.display: will generate a link to the user's page by name

About: 
loads on the same page, and shows a small description about this website and myself

pageLayout: 
allows for manipulation of the way a child component is displayed in relation to other elements 



*/
