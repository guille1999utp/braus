import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ContextAuth } from '../context/contextAuth';
import { fetchstoken } from '../helpers/fetchMethods';
 const Register = () => {
  let navigate = useNavigate();
  const  { AgregarUser } = useContext(ContextAuth);
  const [Form, setForm] = useState({
    usuario:"",
    nombre:"",
    apellido:"",
    correo:"",
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
    const resultlogin = await fetchstoken('register', Form , 'POST');
    console.log(resultlogin)
    if(resultlogin.ok){
     const {__v,password,creacion,correo,...state} = resultlogin.newuser;
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
        title: resultlogin.errors.msg
      })
    }
      };
  return (
    <div className='login'>
        <h1>Activar Membresia</h1>
        <div className='contenedor'>
        <p className='parrafoLogin'>ya tienes cuenta?</p> <Link to='/login' className='vinculo'>Ingresa aqui</Link>
        </div>
        <form className='form-register' onSubmit={onSubmit}>
        <input type="text"     value={Form.usuario} name="usuario" onChange={onChange} placeholder='Usuario de tu tarjeta' />
        <input type="text"     value={Form.nombre} name="nombre" onChange={onChange} placeholder='Nombre' />
        <input type="text"     value={Form.apellido} name="apellido" onChange={onChange} placeholder='Apellido' />
        <input type="email"    value={Form.correo} name="correo" onChange={onChange} placeholder='Email' />
        <input type="password" value={Form.password} name="password" onChange={onChange} placeholder='Contrasena' />
        <button>Activar</button>
        </form>
    </div>
  )
}

export default Register