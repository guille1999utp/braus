import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { BsPencilFill } from "react-icons/bs";
import { AiFillCloseCircle,AiFillSave } from "react-icons/ai";
import Swal from 'sweetalert2';
import { fetchCToken } from '../../helpers/fetchMethods';

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


export const Celda = ({user,func}) => {
    const [editar, setEditar] = useState(false);
    const [porcentaje, setNumber] = useState(user.porcentaje);

    const onChangeMensaje = (e) => {
        const { value } = e.target;
        setNumber(value);
      };

      const editPorcentaje = async() => {
        setEditar(!editar);
        const editUser = await fetchCToken('usuarios', {id:user.uid,porcentaje} , 'PUT');
        if(editUser.ok){
          func(editUser.user)
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
            icon: 'success',
            title: "porcentaje modificado correctamente"
          })
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
          if(editUser.errors){
            Toast.fire({
              icon: 'error',
              title: editUser.errors.msg
            })
          }else{
            Toast.fire({
              icon: 'error',
              title: editUser.msg
            })
          }
        }
    
          };
    
  return (
    <StyledTableRow key={user.usuario}>
    <StyledTableCell align="center">
      {user.usuario}
    </StyledTableCell>
    <StyledTableCell align="center">{(editar)?<input type="number" onChange={onChangeMensaje} value={porcentaje}/>:user.porcentaje}</StyledTableCell>
    <StyledTableCell align="center">{(editar)?<div>
        <AiFillSave  fontSize={20} style={{cursor:"pointer",marginRight:"14px"}} color="blue" onClick={editPorcentaje}/>
        <AiFillCloseCircle fontSize={20} style={{cursor:"pointer"}} color="red" onClick={()=>setEditar(!editar)}/></div>:<BsPencilFill style={{cursor:"pointer"}} fontSize={20} color="green" onClick={
          ()=>{
            setNumber(user.porcentaje);
            setEditar(!editar) 
          }
          }/>}</StyledTableCell>
        
  </StyledTableRow>
  )
}
