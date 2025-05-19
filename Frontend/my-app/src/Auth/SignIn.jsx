import React from 'react'
import styles from './SignIn.module.css'
const SignIn = () => {
  return (
    <div className={styles.container}>
         <div className={styles.field}>
           <label htmlFor="email" className={styles.label}>Email</label>
           <input type="email" name="email" className={styles.input} />
         </div>
         <div className={styles.field}>
           <label htmlFor="password" className={styles.label}>Password</label>
           <input type="password" name="password" className={styles.input} />
         </div>
         <div className={styles.field}>
           <button className={styles.button}>Login</button>
         </div>
       </div>
  )
}

export default SignIn