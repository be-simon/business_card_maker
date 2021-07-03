import React from 'react';
import styles from './app.module.css';
import Login from './components/login_page/login/login';

function App({authService}) {
  return (
    <React.StrictMode>
      <div className={styles.app}>
        <Login authService={authService}/>
      </div>
    </React.StrictMode>
  );
}

export default App;
