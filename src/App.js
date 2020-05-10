import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Main from './Main';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

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
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

function About() {
  return <h2>About</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Blog() {
  return <h2>Blog</h2>;
}