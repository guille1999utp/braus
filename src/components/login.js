import React from 'react'
import { Link } from 'react-router-dom';
import './login.scss';
 const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <div className='contenedor'>
        <p className='parrafoLogin'>No tienes una cuenta?</p> <Link to='/register' className='vinculo'>registrate aqui</Link>
        </div>
        <form className='form-register'>
        <input type="text" placeholder='Usuario' />
        <input type="password" placeholder='Contrasena' />
        <button>Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default Login
