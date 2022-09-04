import React, { useContext, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import {fetchstoken} from "../helpers/fetchMethods"
import './login.scss';
import { ContextAuth } from "../context/contextAuth";
import Swal from 'sweetalert2'

 const Login = () => {
  let navigate = useNavigate();
  const  { AgregarUser } = useContext(ContextAuth);
  const [Form, setForm] = useState({
    usuario:"",
    password:""
  })

  const onChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...Form,
        [name]: value,
      });
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    const resultlogin = await fetchstoken('login', Form , 'POST');
    if(resultlogin.ok){
     const {__v,password,creacion,correo,...state} = resultlogin.usuarioBd;
     localStorage.setItem('token',resultlogin.token);
     AgregarUser(state);
     navigate("/home");
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: resultlogin.msg
      })
    }
      };


  return (
    <div className='login'>
        <h1>Login</h1>
        <div className='contenedor'>
        <p className='parrafoLogin'>No tienes una cuenta?</p> <Link to='/register' className='vinculo'>registrate aqui</Link>
        </div>
        <form className='form-register' onSubmit={onSubmit}>
        <input name="usuario" value={Form.usuario}   onChange={onChange} type="text" placeholder='Usuario' />
        <input name='password' value={Form.password} onChange={onChange} type="password" placeholder='Contrasena' />
        <button>Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default Login
