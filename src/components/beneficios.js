import React from 'react'
import './beneficios.scss';
import { AiOutlineClose } from "react-icons/ai";
const Beneficios = ({fun,image}) => {
  return (
    <div className='beneficios'>
        <AiOutlineClose className='iconClose' fontSize={30} color="white"  onClick={()=>fun(false)}/>
       <img alt='imagen del producto' src={image} className='beneficiosPantalla'>

       </img>
        </div>
  )
}

export default Beneficios
