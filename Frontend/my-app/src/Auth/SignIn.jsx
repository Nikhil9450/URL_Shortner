import React, { useRef } from 'react';
import styles from './SignIn.module.css';
import axios from 'axios';
const SignIn = () => {
  const emailRef = useRef(null);
  const  passwordRef = useRef(null);

  const loginHandler= async ()=>{
    const email= emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("email---->",email);
    console.log("password-------->",password);
    try{
      const response= await axios.post("http://localhost:3000/user/login",{
        email,
        password
      });
      console.log('request submitted',response);

    } catch (error){
        console.log("Error posting data",error);
    }
    
  }

  return (
    <div className={styles.container}>
         <div className={styles.field}>
           <label htmlFor="email" className={styles.label} >Email</label>
           <input type="email" name="email" className={styles.input}  ref={emailRef}/>
         </div>
         <div className={styles.field}>
           <label htmlFor="password" className={styles.label} ref={passwordRef}>Password</label>
           <input type="password" name="password" className={styles.input} ref={passwordRef}/>
         </div>
         <div className={styles.field}>
           <button className={styles.button} onClick={loginHandler}>Login</button>
         </div>
       </div>
  )
}

export default SignIn