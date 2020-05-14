import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

import './App.css'

export default function App() {
  return (
    <Router>
      <div className="App-header">
        <div className="navbar">
          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>
          <div className="menu-item">
            <Link to="/about">About</Link>
          </div>
          <div className="menu-item">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="menu-item">
            <Link to="/blog">Blog</Link>
          </div>
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
    </Router>
  );
}