import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import firebaseApp from '../../firebase/firebase';
import { useHistory } from 'react-router';
import styles from './home.module.css'

const Home = (props) => {
  const history = useHistory()

  const onLogout = () => {
    firebaseApp.auth().signOut()
    .then(() => {    
      history.replace('/')
    })
  }
  
  return (
    <section className={styles.section}>
      <Header onLogout={onLogout}/>
      <section className={styles.cardSection}>
        <Maker/>
        <div className={styles.vertical}></div>
        <Preview/>
      </section>
      <Footer/>
    </section>
  )
}
export default Home;