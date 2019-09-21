import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Bye } from './pages/Bye';
import { Header } from './Header';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/bye" exact component={Bye} />
        </Switch>
      </>
    </BrowserRouter>
  )
}
