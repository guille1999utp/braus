import React from 'react'
import "./inicio.scss"
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
let navigate = useNavigate();
  return (
    <div className='inicio-info'>
    <section className='banner'>
    </section>
    <div className='content-inicio'>
    <p>BROUS ORIGINAL</p>
    <h2>SOMETHING WE ALL WANT</h2>
    <div className='content-inicio-acciones'>
        <button onClick={()=>navigate("register")}>ACTIVAR MEMBRESIA</button>
        <button onClick={()=>navigate("catalogos")}>CATALOGO</button>
    </div>
    </div>
    </div>
  )
}
