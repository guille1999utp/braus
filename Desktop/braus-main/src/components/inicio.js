import React from 'react'
import "./inicio.scss"
import Logo from "../assets/banner.png"
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
let navigate = useNavigate();
  return (
    <div className='inicio-info'>
    <section className='banner'>
        <img src={Logo} className="banner-image" alt='banner'/>    
    </section>
    <div className='content-inicio'>
    <p>este es la letra pequeña de brous</p>
    <h2>Este es el inicio de brous</h2>
    <div className='content-inicio-acciones'>
        <button onClick={()=>navigate("register")}>Activar membresias</button>
        <button>Catalogo</button>
    </div>
    </div>
    </div>
  )
}
