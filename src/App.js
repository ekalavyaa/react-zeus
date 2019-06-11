import React, { } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginComponent from './modules/login/login';
import UserComponent from './modules/user/user';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={LoginComponent} />
      <Route exact path='/' component={UserComponent} />
    </Switch>
  );
}

export default App;
