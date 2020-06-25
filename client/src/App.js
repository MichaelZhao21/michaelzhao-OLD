import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Main name="Michael Zhao" />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;