import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo"/>
      <h1 className={styles.title}>
        Business Card Maker
      </h1>
    </header>
  );
}

export default Header;