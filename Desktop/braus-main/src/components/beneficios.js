import React from 'react'
import './beneficios.scss';
import { AiOutlineClose } from "react-icons/ai";
const Beneficios = ({fun}) => {
  return (
    <div className='beneficios'>
        <AiOutlineClose className='iconClose' fontSize={30} color="white"  onClick={()=>fun(false)}/>
       <div className='beneficiosPantalla'>

       </div>
        </div>
  )
}

export default Beneficios
