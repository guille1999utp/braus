import React, { useContext } from 'react'
import './home.scss';
import { AiOutlineUserAdd,AiOutlinePercentage } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { RiShoppingBagLine } from "react-icons/ri";
import { ContextAuth } from "../context/contextAuth";
import { useMediaQuery } from '@mui/material';
const Home = () => {
  const matches = useMediaQuery('(min-width:500px)');
  const  { User } = useContext(ContextAuth);
  const navigate = useNavigate();
  const onClick = (location) =>{
    navigate(`../${location}`);
  }
  return (
    <>
    {(User.rol === "Admin")?<div className='homeAdmin'>

    <div className='panelAdmin' onClick={()=>onClick("Usuarios")}>
      <AiOutlineUserAdd fontSize={90} className="iconHome"/>
      <p>Usuarios</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("porcentaje")}>
    <AiOutlinePercentage fontSize={90} className="iconHome"/>
      <p>Porcentajes</p>
    </div>
    <div className='panelAdmin' onClick={()=>onClick("Hombres")}>
    <RiShoppingBagLine fontSize={90} className="iconHome"/>
      <p>Catalogo</p>
    </div>

    </div>:<div className='home'>
      <h2 className='user' style={{fontWeight:"600",textTransform:"uppercase"}}>{User.usuario}</h2>
      <p className='letrapequeña' style={{fontSize:"18px",opacity:"0.8"}}>Este es tu porcentaje de descuento acumulado</p>
      <p  style={{fontWeight:"600",marginBottom:!matches?"30px":"0px",fontSize:!matches?"100px":"140px"}}>{User.porcentaje}%</p>
      <p className='letrapequeña' style={{marginTop:"-7px",fontSize:"18px",opacity:"0.8"}}>Fecha ultima compra:<span>06/08/2022</span></p>
      <p className='letrapequeña' style={{marginTop:"7px",fontSize:"18px",opacity:"0.8"}}>Dias de vigencia:<span>10</span></p>
      <button onClick={()=>onClick("catalogos")} type="button" style={{cursor:"pointer",textTransform:"uppercase"}}>Ver prendas disponibles</button>
      <p style={{marginTop:"20px",fontSize:"18px",maxWidth:"700px",margin:"0 auto",color:"grey"}}>El porcentaje tiene vigencia de tres meses a partir de tu ultima compra para que lo utilices en cualquiera de nuestros productos</p>
    </div>}
    </>
  )
}

export default Home
