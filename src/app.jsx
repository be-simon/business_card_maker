import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import Home from './components/home/home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App({authService}) {
  return (
    <React.StrictMode>
      <div className={styles.app}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Login authService={authService}/>
            </Route>
            <Route exact path='/home'>
              <Home/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
