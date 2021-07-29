import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './provider.module.css'

const Provider = ({authService}) => {
  const history = useHistory()

  const redirectToHome = uid => {
    history.push({
      pathname:'/home',
      state: uid
    })
  }

  const onLogin = (e) => {
    authService
    .loginWithProvider(e.currentTarget.dataset.provider)
    .then((result) => {
      redirectToHome(result.user.uid)
    })
    .catch ((error) => {
      console.log(`login error: ${error.code}\n >>> ${error.message}`)
    }); 
  };

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      user && (redirectToHome(user.uid))
    })
  })

  return (
    <ul className={styles.provider_list}>
      <li className={styles.list_item}>
        <button className={styles.button} data-provider='Google' onClick={onLogin}>
          <img src="/images/google.png" />
            <span>google</span>
        </button>
      </li>
      <li className={styles.list_item}>
        <button className={styles.button} data-provider='Facebook'>
          <img src="/images/facebook.png" />
            <span>facebook</span>
        </button>
      </li>
    </ul>
  )
}

export default Provider;