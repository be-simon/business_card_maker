import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Provider from './provider'
import Form from './form'
import styles from './login.module.css'

const Login = ({authService}) => {
  return (
    <section>
      <Header/>
      <section className={styles.login}>
        <Form type="Login"/>
        <Provider authService={authService}/>
      </section>
      <Footer/>
    </section>
  );
}

export default Login;