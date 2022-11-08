import { styled } from '@mui/material/styles';
import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Swal from 'sweetalert2';
import { fetchCToken } from '../../helpers/fetchMethods';
import { BsFillCircleFill } from "react-icons/bs";

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


export const CeldaUsers = ({user,userRegister=true,func,cambio}) => {


  const deleteUser = async (e) => {
    e.preventDefault();    
    Swal.fire({
      title: "estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
    }).then(async(result) => {
      if (result.isConfirmed) {
    const deleteU = await fetchCToken("user", {usuario:user.usuario}, "Delete");
    if (deleteU.ok) {
      func(user.usuario);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "se elimino el usuario con exito",
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      if (deleteU.errors) {
        Toast.fire({
          icon: "error",
          title: deleteU.errors.msg,
        });
      } else {
        Toast.fire({
          icon: "error",
          title: deleteU.msg,
        });
      }
    }
  }})
  };

  const ComUser = async (e) => {
    e.preventDefault();    
    Swal.fire({
      title: "estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, Comprar!",
    }).then(async(result) => {
      if (result.isConfirmed) {
    const resCompra = await fetchCToken("compra", {usuario:user.usuario}, "POST");
    if (resCompra.ok) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "se realizo la compra con exito",
      });
      cambio(new Date())
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      if (resCompra.errors) {
        Toast.fire({
          icon: "error",
          title: resCompra.errors.msg,
        });
      }
    }
  }})
  };
  return (
    <StyledTableRow key={user.usuario}>
    <StyledTableCell align="center">
      <BsFillCircleFill fontSize={12} color={user.Creado?"rgb(95, 248, 1)":"white"}/>
    </StyledTableCell>
    <StyledTableCell align="center">
      {user.usuario}
    </StyledTableCell>
    {(userRegister)?<StyledTableCell align="center">
      {user.usuariosRef.map((user,index)=>index === 0?  user : " - " + user)}
    </StyledTableCell>:null}
   {(userRegister)? <StyledTableCell align="center">{user.porcentaje}</StyledTableCell>:null}
    <StyledTableCell align="center" >
    <button style={{padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer",marginRight:"10px"}} type="button" onClick={ComUser}>Comprar</button>
      <button style={{padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer"}} type="button" onClick={deleteUser}>Borrar</button></StyledTableCell>
        
  </StyledTableRow>
  )
}
