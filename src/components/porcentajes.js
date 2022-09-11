import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useCallback, useEffect, useState } from 'react'
import './porcentajes.scss';
import { Celda } from './reutilizable/celda';
import {fetchCToken, fetchstoken} from "../helpers/fetchMethods"
import Swal from 'sweetalert2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  
export const Porcentajes = () => {
  
  const [users, setUser] = useState([]);
  const [formPorcen, setForm] = useState({
    porcentaje1:0,
    porcentaje2:0,
    porcentaje3:0
  });

  const cargarProductos = useCallback(
    async() => {
      const UsersFetchs = await fetchstoken(`usuarios`);
      const InfoFetchs = await fetchCToken(`info`);

      if(UsersFetchs.ok && InfoFetchs.ok ){
        console.log(InfoFetchs)
        setUser(UsersFetchs.user.reverse());
        setForm({
          porcentaje1:InfoFetchs.info[0].porcentaje1,
          porcentaje2:InfoFetchs.info[0].porcentaje2,
          porcentaje3:InfoFetchs.info[0].porcentaje3
        })
      }
    },[]
  )
  
  useEffect(() => {
    cargarProductos();
  }, [cargarProductos])

  const editPorcentajes = async() => {
    const editPorcents = await fetchCToken('porcentaje', formPorcen , 'PUT');
    console.log(editPorcents)
    if(editPorcents.ok){
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
      if(editPorcents.errors){
        Toast.fire({
          icon: 'error',
          title: editPorcents.errors.msg
        })
      }else{
        Toast.fire({
          icon: 'error',
          title: editPorcents.msg
        })
      }
    }

      };

      const onChangePorcentaje = (e) => {
        const { value,name } = e.target;
        setForm({...formPorcen,[name]:value});
      };

  const userModify = (user) =>{
    setUser([user,...users.filter(userCompare=>userCompare.uid !== user.uid)])
  } 

  console.log(users)
  return (
    <Box sx={{ flexGrow: 1,margin:"64px 0" }}>
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, md: 12 }} >
      <Grid item xs={4} md={4} className="grid-comisiones">
        <h2>comisiones</h2>
        <form className='form-porcentaje'>
        <label for=""  style={{marginTop:"40px"}}>1 Generacion</label>
        <input type="text" value={formPorcen.porcentaje1} onChange={onChangePorcentaje} name="porcentaje1"  class="input" placeholder="1 Generacion" />
        
        <label for=""  style={{marginTop:"40px"}}>2 Generacion</label>
        <input type="text" value={formPorcen.porcentaje2} onChange={onChangePorcentaje}  name="porcentaje2" class="input" placeholder="2 Generacion" />
        
        <label for=""  style={{marginTop:"40px"}}>3 Generacion</label>
        <input type="text" value={formPorcen.porcentaje3} onChange={onChangePorcentaje} name="porcentaje3"  class="input" placeholder="3 Generacion" />
        <button style={{marginTop:"40px",cursor:"pointer"}} onClick={editPorcentajes} type="button">Guardar</button>
        </form>
      </Grid>
      <Grid item 
          xs={4}
          md={8} className="grid-comisiones" sx={{padding:"0 40px !important"}}>
        <h2 style={{marginBottom:"40px"}}>Porcentajes Acumulados</h2>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Usuario</StyledTableCell>
            <StyledTableCell align="center">Porcentaje</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
            <Celda user={user} func={userModify}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Grid>
  </Box>
  )
}
