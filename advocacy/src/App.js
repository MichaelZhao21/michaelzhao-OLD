import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Help from './pages/Help';
import BlackRights from './pages/BlackRights';
import PoliceBrutality from './pages/PoliceBrutality';
import OnlineProtests from './pages/OnlineProtests';
import WhitePrivilege from './pages/WhitePrivilege';
import Media from './pages/Media';
import Pride from './pages/Pride';
import ToWatch from './pages/ToWatch';
import CurrentEvents from './pages/CurrentEvents';

const App = () => {
  return (
    <BrowserRouter>
      <Link className="home-button" to="/">Back to Home</Link>
      <div className="app">
        <Switch>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/current-events">
            <CurrentEvents />
          </Route>
          <Route path="/black-rights">
            <BlackRights />
          </Route>
          <Route path="/police-brutality">
            <PoliceBrutality />
          </Route>
          <Route path="/online-protests">
            <OnlineProtests />
          </Route>
          <Route path="/white-privilege">
            <WhitePrivilege />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/pride">
            <Pride />
          </Route>
          <Route path="/to-watch">
            <ToWatch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
