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
import { Celda } from './reutilizable/celda';


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
        user:"user1",
        porcent:52,
    },{
        user:"user2",
        porcent:24,
    },{
        user:"user3",
        porcent:63,
    },{
        user:"user4",
        porcent:84,
    },{
        user:"user5",
        porcent:36,
    },
  ]


export const Porcentajes = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} sx={{mt:"29px"}}>
      <Grid item xs={6} md={4} className="grid-comisiones">
        <h2>comisiones</h2>
        <form className='form-porcentaje'>
        <label for=""  style={{marginTop:"40px"}}>1 Generacion</label>
        <input type="text" class="input" placeholder="1 Generacion" />
        
        <label for=""  style={{marginTop:"40px"}}>2 Generacion</label>
        <input type="text" class="input" placeholder="2 Generacion" />
        
        <label for=""  style={{marginTop:"40px"}}>3 Generacion</label>
        <input type="text" class="input" placeholder="3 Generacion" />
        <button style={{marginTop:"40px",cursor:"pointer"}}>Guardar</button>
        </form>
      </Grid>
      <Grid item xs={6} md={8} className="grid-comisiones" sx={{padding:"0 40px !important"}}>
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
            <Celda user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Grid>
  </Box>
  )
}
