import React from 'react'
import "./inicio.scss"
import Logo from "../assets/banner.png"
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
let navigate = useNavigate();
  return (
    <div className='inicio-info'>
    <section className='banner'>
    </section>
    <div className='content-inicio'>
    <p>este es la letra pequeña de brous</p>
    <h2>Este es el inicio de brous</h2>
    <div className='content-inicio-acciones'>
        <button onClick={()=>navigate("register")}>ACTIVAR MEMBRESIA</button>
        <button onClick={()=>navigate("catalogos")}>CATALOGO</button>
    </div>
    </div>
    </div>
  )
}
