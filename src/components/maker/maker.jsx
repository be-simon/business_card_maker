import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import firebaseApp from '../../firebase/firebase';
import { useHistory } from 'react-router';

const Maker = (props) => {
  const history = useHistory()

  const onLogout = () => {
    firebaseApp.auth().signOut()
    .then(() => {    
      history.replace('/')
    })
  }
  
  return (
    <div>
      <Header onLogout={onLogout}/>
      <section>
        <h1>Maker</h1>
      </section>
      <Footer/>
    </div>
  )
}
export default Maker;