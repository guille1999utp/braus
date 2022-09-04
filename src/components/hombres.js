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
import React, { useState } from "react";
import "./porcentajes.scss";
import { CeldaProductos } from "./reutilizable/celdaProductos";

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
    foto: "https://cf.shopee.com.co/file/5b4458fdbbc931d438fb91f45a879156",
    titulo: "ropa para hombre color negro",
    precio: 32432,
  },
  {
    foto: "https://cf.shopee.com.co/file/5b4458fdbbc931d438fb91f45a879156",
    titulo: "ropa para hombre color negro",
    precio: 3456356,
  },
  {
    foto: "https://cf.shopee.com.co/file/5b4458fdbbc931d438fb91f45a879156",
    titulo: "ropa para hombre color negro",
    precio: 35635,
  },
  {
    foto: "https://cf.shopee.com.co/file/5b4458fdbbc931d438fb91f45a879156",
    titulo: "ropa para hombre color negro",
    precio: 356536,
  },
  {
    foto: "https://cf.shopee.com.co/file/5b4458fdbbc931d438fb91f45a879156",
    titulo: "ropa para hombre color negro",
    precio: 546756,
  },
];
export const Hombres = () => {
  const [urlmas, setUrl] = useState({
    fotosdescripsion:
      "https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg",
      fotosId: 0,
  });

  const onFilesave = async (e) => {
    const file = e.target.files[0];
    setUrl(file);
  };
  const onFile = () => {
    document.querySelector("#fileproductoAgregar").click();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mt: "29px" }}>
        <Grid item xs={6} md={4} className="grid-comisiones">
          <h2>Creacion</h2>
          <form className="form-porcentaje">
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
            <input type="text" class="input" />
            <label for="" class="label" style={{ marginTop: "40px" }}>
              Precio
            </label>
            <input type="number" class="input" />
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
                {users.map((user,index) => (
                  <CeldaProductos user={user} idProducto={index}/>
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
