import {
  Box,
  Grid,} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useCallback, useEffect, useState } from "react";
import "./porcentajes.scss";
import { CeldaProductos } from "./reutilizable/celdaProductos";
import {fetchCToken, fetchstoken} from "../helpers/fetchMethods"

import Swal from 'sweetalert2'
import { UploadPhoto } from "../helpers/cloudinaryUpload";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Hombres = () => {
  const [agregarfotos, setAgregarfotos] = useState({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg",
    public_id: 0
  });

  const [productos, setProductos] = useState([]);

  const [Form, setForm] = useState({
            titulo:"",
            precio:0,
            fotosdescripsion:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg",
            fotosId: 0,
  })

  const cargarProductos = useCallback(
    async() => {
      const productsFetchs = await fetchstoken(`producto`);
      if(productsFetchs.ok ){
        setProductos(productsFetchs.products.reverse())
      }
    },[]
  )
  
  useEffect(() => {
    cargarProductos();
  }, [cargarProductos])
  


  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...Form,
      [name]: value,
    });
}

  const onFilesave = async (e) => {
    const file = e.target.files[0];
    setAgregarfotos(file);
  };
  const onFile = () => {
    document.querySelector("#fileproductoAgregar").click();
  };


  const onSubmit = async(e) => {
    e.preventDefault();
    let productoNew={}
    if(agregarfotos.secure_url !== "https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg"){
      const url = await UploadPhoto(agregarfotos);
      console.log(url)
      const res = {
        ...Form,
        fotosdescripsion:url.secure_url,
        fotosId:url.public_id
      }
      productoNew = await fetchCToken('producto', res , 'POST');
    }else{
      productoNew = await fetchCToken('producto', Form , 'POST');
    }
    if(productoNew.ok){
      setProductos([productoNew.newProd,...productos])
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
        title: "producto creado correctamente"
      })
      setForm({
        titulo:"",
        precio:0,
        fotosdescripsion:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg",
        fotosId: 0,
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
      Toast.fire({
        icon: 'error',
        title: productoNew.msg
      })
    }

      };

      const deletProduct = (id) =>{
        setProductos([...productos.filter((produc)=>produc.pid !== id)])
      } 


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mt: "29px" }}>
        <Grid item xs={6} md={4} className="grid-comisiones">
          <h2>Creacion</h2>
          <form className="form-porcentaje" onSubmit={onSubmit}>
            <label for="" class="label" style={{ marginTop: "40px" }}>
              Foto
              <button
                onClick={onFile}
                type="button"
                style={{
                  fontSize: "17px",
                  margin: "0",
                  marginLeft: "10px",
                  borderRadius: 0,
                  width: "200px",
                }}
              >
                Subir Imagen
              </button>
            </label>

            <label for="" class="label" style={{ marginTop: "40px" }}>
              Titulo
            </label>
            <input type="text" class="input" onChange={onChange} name="titulo" value={Form.titulo}/>
            <label for="" class="label" style={{ marginTop: "40px" }}>
              Precio
            </label>
            <input type="number" class="input" onChange={onChange} name="precio" value={Form.precio}/>
            <button style={{ marginTop: "40px", cursor: "pointer" }}>
              Guardar
            </button>
          </form>
        </Grid>
        <Grid
          item
          xs={6}
          md={8}
          className="grid-comisiones"
          sx={{ padding: "0 40px !important" }}
        >
          <h2 style={{ marginBottom: "40px" }}>Productos Subidos</h2>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Foto</StyledTableCell>
                  <StyledTableCell align="center">Titulo</StyledTableCell>
                  <StyledTableCell align="center">Precio</StyledTableCell>
                  <StyledTableCell align="center">Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map((producto,index) => (
                  <CeldaProductos producto={producto} idProducto={index} func={deletProduct}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <input
        type="file"
        id="fileproductoAgregar"
        aria-label="File browser example"
        onChange={onFilesave}
        style={{ display: "none" }}
      ></input>
    </Box>
  );
};
