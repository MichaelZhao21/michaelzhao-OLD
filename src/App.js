import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import { ReactComponent as Logo } from './logo.svg';

import './App.scss'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <div className="spacer"></div>
      <Navbar variant="primary" collapseOnSelect>
        <Navbar.Brand>
          <Link to="/" className="brand">
            <Logo className="logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto" defaultActiveKey="">
          <Navbar.Collapse>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem>Projects</NavItem>
            </LinkContainer>
            <LinkContainer to="/blog">
              <NavItem>Blog</NavItem>
            </LinkContainer>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
      <div className="content">
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
    </BrowserRouter >
  );
}

export default App;