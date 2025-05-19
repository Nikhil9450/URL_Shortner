import React from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Full Name</label>
        <input type="text" name="name" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" name="email" className={styles.input} />
      </div>
      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" name="password" className={styles.input} />
      </div>
      <div className={styles.field}>
        <button className={styles.button}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
