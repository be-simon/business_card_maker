import React from 'react';
import styles from './provider.module.css'

const Provider = ({authService}) => {
  const onLogin = (e) => {
    authService
    .loginWithProvider(e.currentTarget.dataset.provider)
    .then(console.log(''));
  }
  
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