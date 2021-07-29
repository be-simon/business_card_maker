import React from 'react';
import styles from './form.module.css'

const Form = ({type}) => {
  return (
    <form className={styles.login_form} action="">
      <div className={styles.form_container}>
        <label>Email</label>
        <input type="text" placeholder='User Email' required/>
        <label>password</label>
        <input type="password" placeholder='Password' required/>
        <button className={styles.submit_btn}>{type}</button>
      </div>
    </form>
  )
}

export default Form;