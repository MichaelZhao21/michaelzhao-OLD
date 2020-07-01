import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Game from './matter/Game';
import About from './subpages/about/About';

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Game} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;