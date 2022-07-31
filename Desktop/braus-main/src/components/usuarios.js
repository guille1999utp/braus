import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'
import './porcentajes.scss';
import { CeldaUsers } from './reutilizable/celdaUsers';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const users = [
    {
        user:"#juanCamilo",
        porcent:52,
        referidos:["#sebastianMejia", "#YesicaMopan","#SantiagoCorrea"]
    },{
        user:"#sebastianMejia",
        porcent:24,
        referidos:["#sebastianMejia"]
    },{
        user:"#carlosJimenez",
        porcent:63,
        referidos:["#sebastianMejia", "#YesicaMopan"]
    },{
        user:"#YesicaMopan",
        porcent:84,
        referidos:["#sebastianMejia", "#YesicaMopan","#SantiagoCorrea"]
    },{
        user:"#SantiagoCorrea",
        porcent:36,
        referidos:["#SantiagoCorrea"]
    },
  ]
export const Usuarios = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} sx={{mt:"29px"}}>
      <Grid item xs={6} md={4} className="grid-comisiones">
        <h2>Creacion</h2>
        <form className='form-porcentaje'>
        <label for="" class="label" style={{marginTop:"40px"}}>NUEVO USUARIO</label>
        <input type="text" class="input"/>
        
        <label for="" class="label" style={{marginTop:"40px"}}>CODIGO DE REFERENTE</label>
        <input type="text" class="input"/>
        
        <label for="" class="label" style={{marginTop:"40px"}}>BONIFICACION EN % AL NUEVO USUARIO</label>
        <input type="text" class="input"/>

        <label for="" class="label" style={{marginTop:"40px"}}>FECHA DE CREACION</label>
        <input type="text" class="input"/>
        <button style={{marginTop:"40px",cursor:"pointer"}}>Guardar</button>
        </form>
      </Grid>
      <Grid item xs={6} md={8} className="grid-comisiones" sx={{padding:"0 40px !important"}}>
        <h2 style={{marginBottom:"40px"}}>Usuarios</h2>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Usuario</StyledTableCell>
            <StyledTableCell align="center">Referidos</StyledTableCell>
            <StyledTableCell align="center">Porcentaje</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
            <CeldaUsers user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Grid>
  </Box>
  )
}