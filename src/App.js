import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Details,
  Search,
  Home,
} from './features';

const App = () => (
  <Router>
    <Switch>
      <Route path="/details/:slug">
        <Details />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
