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
  const [Users, setUsers] = useState([]);
  const [UsersCreates, setUsersCreates] = useState([]);
  const [formUser, setForm] = useState({
    usuario: "",
    referente: "",
  });
  useEffect(() => {
    const funcionRenovacion = async () => {
      const creates = await fetchCToken("usuariosCreados");
      const res = await fetchCToken("usuarios");
      if (res.ok && creates.ok) {
        setUsers(res.user.reverse());
        setUsersCreates(creates.user.reverse())
      }
    };
    funcionRenovacion();
  }, []);

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
      setUsersCreates([createU.newuser,...UsersCreates])
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
    setUsersCreates(UsersCreates.filter((user)=>user.usuario !== userFilter))
  }
  console.log(UsersCreates)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mt: "29px" }}>
        <Grid item xs={6} md={4} className="grid-comisiones">
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

          <h2 style={{ marginBottom: "40px" }}>Usuarios Creados</h2>

<TableContainer sx={{margin:"auto",width:"90%"}} component={Paper}>
  <Table aria-label="customized table">
    <TableHead>
      <TableRow>
        <StyledTableCell align="center">Usuario</StyledTableCell>
        <StyledTableCell align="center">Acciones</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {UsersCreates.map((user) => (
        <CeldaUsers user={user} func={filterUSer} userRegister={false}/>
      ))}
    </TableBody>
  </Table>
</TableContainer>
          
        </Grid>
        <Grid
          item
          xs={6}
          md={8}
          className="grid-comisiones"
          sx={{ padding: "0 40px !important" }}
        >
          <h2 style={{ marginBottom: "40px" }}>Usuarios Registrados</h2>

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
                {Users.filter((fil)=>fil.rol !== "Admin").map((user) => (
                  <CeldaUsers func={filterUSer} user={user} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};
