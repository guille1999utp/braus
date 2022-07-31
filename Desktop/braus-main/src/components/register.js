import React from 'react'
import { Link } from 'react-router-dom'
 const Register = () => {
  return (
    <div className='login'>
        <h1>Crear Cuenta</h1>
        <div className='contenedor'>
        <p className='parrafoLogin'>ya tienes una cuenta?</p> <Link to='/login' className='vinculo'>Ingresa aqui</Link>
        </div>
        <form className='form-register'>
        <input type="text" placeholder='Usuario' />
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Contrasena' />
        <button>Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default Register