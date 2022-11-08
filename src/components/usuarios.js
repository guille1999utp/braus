import { Box, FormControl, Grid, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import "./porcentajes.scss";
import { CeldaUsers } from "./reutilizable/celdaUsers";
import { fetchCToken } from "../helpers/fetchMethods";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Usuarios = () => {
  const [cambio, setCambio] = useState(0)
  const [Users, setUsers] = useState([]);
  const [formUser, setForm] = useState({
    usuario: "",
    referente: "",
  });
  useEffect(() => {
    const funcionRenovacion = async () => {
      const res = await fetchCToken("usuarios");
      if (res.ok ) {
        setUsers(res.user.reverse());
      }
    };
    funcionRenovacion();
  }, [cambio]);
  const createUser = async (e) => {
    e.preventDefault();    
    const createU = await fetchCToken("user", formUser, "POST");
    if (createU.ok) {
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
        title: "se creo el usuario con exito",
      });
  
      const res = await fetchCToken("usuarios");
      setUsers(res.user.reverse())
      setForm({
        usuario: "",
        referente: "",
      })
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
      if (createU.errors) {
        Toast.fire({
          icon: "error",
          title: createU.errors.msg,
        });
      } else {
        Toast.fire({
          icon: "error",
          title: createU.msg,
        });
      }
    }
  };

  const onChangePorcentaje = (e) => {
    const { value, name } = e.target;
    setForm({ ...formUser, [name]: value });
  };

  const filterUSer = (userFilter) => {
    setUsers(Users.filter((user)=>user.usuario !== userFilter))
  }
  console.log("reo")
  return (
    <Box sx={{ flexGrow: 1,margin:"64px 0" }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, md: 12 }} >
        <Grid item xs={4} md={4} className="grid-comisiones" >
          <h2>Creacion</h2>
          <form className="form-porcentaje" onSubmit={createUser}>
            <label for="" class="label" style={{ marginTop: "40px" }}>
              NUEVO USUARIO
            </label>
            <input
              type="text"
              class="input"
              name="usuario"
              value={formUser.usuario}
              onChange={onChangePorcentaje}
            />

            <label for="" class="label" style={{ marginTop: "40px" }}>
              CODIGO DE REFERENTE
            </label>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Codigo"
                name="referente"
                value={formUser.referente}
                onChange={onChangePorcentaje}
                sx={{ height: "40px", padding: "0" }}
              >
                { Users.map((user)=><MenuItem value={user.usuario}>{user.usuario}</MenuItem>) }
              </Select>
            </FormControl>

            <button style={{ marginTop: "40px", cursor: "pointer" }}>
              Guardar
            </button>
          </form>

          
        </Grid>
        <Grid
          item
          xs={4}
          md={8}
          className="grid-comisiones"
        >
          <h2 style={{ marginBottom: "40px" }}>Usuarios Registrados</h2>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">Usuario</StyledTableCell>
                  <StyledTableCell align="center">Referidos</StyledTableCell>
                  <StyledTableCell align="center">Porcentaje</StyledTableCell>
                  <StyledTableCell align="center">Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Users.filter((fil)=>fil.rol !== "Admin").map((user) => (
                  <CeldaUsers func={filterUSer} user={user} cambio={setCambio}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};
