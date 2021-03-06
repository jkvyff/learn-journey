import React from 'react';
import './Routes.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { HelloLock } from './pages/HelloLock';
import { Header } from './Header';
import { Discover } from './pages/Discover';

export const Routes: React.FC = () => {
  return <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/helloLock" component={HelloLock} />
      </Switch>
    </div>
  </BrowserRouter>
};
