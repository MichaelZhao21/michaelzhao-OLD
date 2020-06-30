import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Game from './matter/Game';
import About from './subpages/about/About';
import AdvocacyApp from './subpages/advocacy/AdvocacyApp';

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/advocacy/:other" component={AdvocacyApp} />
        <Route path="/advocacy" component={AdvocacyApp} />
        <Route exact path="/" component={Game} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;