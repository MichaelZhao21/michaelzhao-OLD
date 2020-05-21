import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

import './App.scss'
import logo from './icon.png'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-content">
        <div className="navbar">
          <img src={logo} className="logo menu-item" alt="logo"></img>
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/projects" className="menu-item">Projects</Link>
          <Link to="/blog" className="menu-item">Blog</Link>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Main name="Michael Zhao" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;