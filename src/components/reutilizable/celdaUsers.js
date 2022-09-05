import { styled } from '@mui/material/styles';
import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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


export const CeldaUsers = ({user}) => {

  return (
    <StyledTableRow key={user.user}>
    <StyledTableCell align="center">
      {user.usuario}
    </StyledTableCell>
    <StyledTableCell align="center">
      {user.usuariosRef}
    </StyledTableCell>
    <StyledTableCell align="center">{user.porcentaje}</StyledTableCell>
    <StyledTableCell align="center" ><button style={{padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer"}}>Borrar</button></StyledTableCell>
        
  </StyledTableRow>
  )
}
