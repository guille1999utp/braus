import { Box, FormControl, Grid, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import './porcentajes.scss';
import { CeldaUsers } from './reutilizable/celdaUsers';
import { fetchCToken } from '../helpers/fetchMethods';

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
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const funcionRenovacion =  async() => {
         const res = await fetchCToken('usuarios');
         if(res.ok){
          setUsers(res.user);
         }
       }
       funcionRenovacion()
  }, [])

  console.log(Users)

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} sx={{mt:"29px"}}>
      <Grid item xs={6} md={4} className="grid-comisiones">
        <h2>Creacion</h2>
        <form className='form-porcentaje'>
        <label for="" class="label" style={{marginTop:"40px"}}>NUEVO USUARIO</label>
        <input type="text" class="input"/>
        
        <label for="" class="label" style={{marginTop:"40px"}}>CODIGO DE REFERENTE</label>
        <FormControl fullWidth >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Codigo"
          sx={{height: "40px",padding:"0"}}
        >
          <MenuItem value={10}>#sebastianMejia</MenuItem>
          <MenuItem value={20}>#YesicaMopan</MenuItem>
          <MenuItem value={30}>#SantiagoCorrea</MenuItem>
        </Select>
      </FormControl>
      
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