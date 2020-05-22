import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

import './App.scss'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container className="custom-container" flex="md">
      <BrowserRouter>
        <Navbar variant="primary" fluid collapseOnSelect>
          <Navbar.Brand>
            <Link to="/" className="brand">Michael Zhao</Link>
          </Navbar.Brand>
          <Nav className="ml-auto" activeKey="/">
            <Navbar.Collapse>
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
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
    </Container>
  );
}

export default App;