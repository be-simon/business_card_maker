import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
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
              <Maker/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
