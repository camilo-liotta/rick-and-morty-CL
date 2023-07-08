import React, { useState } from 'react'
import style from './Login.module.css'
import validation from './validations';

export default function Login({ingresar}) {
  
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({

  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    const validateErrors = validation({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(validateErrors);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    ingresar(userData);
  }
  
  return (
    <div className={style.login}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input 
            type="email"
            name="email"
            placeholder='Enter your email'
            value={userData.email}
            onChange={handleChange}
          />
          <div className={style.error}>{errors.email && <span>{errors.email}</span>}</div>
        </div>

        <div>
          <label htmlFor="password">PASSWORD</label>
          <input 
            type='password'
            name='password'
            placeholder='Enter your password'
            value={userData.password}
            onChange={handleChange}
          />
          <div className={style.error}>{errors.password && <span>{errors.password}</span>}</div>
          
        </div>

        <button className={style.boton} disabled={!userData.email || !userData.password || errors.email || errors.password}>SUBMIT</button>
      </form>
    </div>
  )
}