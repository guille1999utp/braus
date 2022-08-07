import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
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


export const CeldaProductos = ({user,idProducto}) => {
    const [editar, setEditar] = useState(false); 
    const [urlmas, setUrl] = useState({
        secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg",
        public_id: 0
      });
      
    const [form, setForm] = useState({titulo:user.titulo,precio:user.precio});

    const onChangeMensaje = (e) => {
        const { value , name} = e.target;
        setForm({...form,[name]:value});
      };
          const onFilesave  = async(e) =>{
              const file = e.target.files[0];
              setUrl(file);
            }
            const onFile  = () =>{
              document.querySelector(`#fileproducto${idProducto}`).click();
            }

  return (
    <StyledTableRow key={user.foto}>
    <StyledTableCell align="center">
      <img src={user.foto} width="200" onClick={onFile} style={{cursor:"pointer"}}></img>
    </StyledTableCell>
    <StyledTableCell align="center">
    {(editar)?<input type="text" onChange={onChangeMensaje} name="titulo" value={form.titulo}/>: user.titulo}
    </StyledTableCell>
    <StyledTableCell align="center">
    {(editar)?<input type="number" onChange={onChangeMensaje} name="precio" value={form.precio}/>:`$${new Intl.NumberFormat().format(parseInt(user.precio))}`}
    </StyledTableCell>
    <StyledTableCell align="center">{(!editar)?<><button style={{padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer"}}>Borrar</button><button onClick={()=>setEditar(!editar)}  style={{marginLeft:"20px",padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer"}}>Editar</button></>:<><button style={{padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer"}}>Guardar</button><button onClick={()=>setEditar(!editar)}  style={{marginLeft:"20px",padding:"4px 14px",borderRadius:"3px",border:"solid 1px black",background:"black",color:"white",cursor:"pointer"}}>Cancelar</button></>}</StyledTableCell>
    <input type="file" id={`fileproducto${idProducto}`} aria-label="File browser example" onChange={onFilesave} style={{display:"none"}} ></input>
  </StyledTableRow>
  )
}
