import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { BsPencilFill } from "react-icons/bs";
import { AiFillCloseCircle,AiFillSave } from "react-icons/ai";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


export const Celda = ({user}) => {
    const [editar, setEditar] = useState(false);
    const [Number, setNumber] = useState(user.porcent);

    const onChangeMensaje = (e) => {
        const { value } = e.target;
        setNumber(value);
      };
    
  return (
    <StyledTableRow key={user.user}>
    <StyledTableCell align="center">
      {user.user}
    </StyledTableCell>
    <StyledTableCell align="center">{(editar)?<input type="number" onChange={onChangeMensaje} value={Number}/>:user.porcent}</StyledTableCell>
    <StyledTableCell align="center">{(editar)?<div>
        <AiFillSave  fontSize={20} style={{cursor:"pointer",marginRight:"14px"}} color="blue" onClick={()=>setEditar(!editar)}/>
        <AiFillCloseCircle fontSize={20} style={{cursor:"pointer"}} color="red" onClick={()=>setEditar(!editar)}/></div>:<BsPencilFill style={{cursor:"pointer"}} fontSize={20} color="green" onClick={()=>setEditar(!editar)}/>}</StyledTableCell>
        
  </StyledTableRow>
  )
}
