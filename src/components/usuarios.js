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

const users = [
  {
    user: "#juanCamilo",
    porcent: 52,
    referidos: ["#sebastianMejia", "#YesicaMopan", "#SantiagoCorrea"],
  },
  {
    user: "#sebastianMejia",
    porcent: 24,
    referidos: ["#sebastianMejia"],
  },
  {
    user: "#carlosJimenez",
    porcent: 63,
    referidos: ["#sebastianMejia", "#YesicaMopan"],
  },
  {
    user: "#YesicaMopan",
    porcent: 84,
    referidos: ["#sebastianMejia", "#YesicaMopan", "#SantiagoCorrea"],
  },
  {
    user: "#SantiagoCorrea",
    porcent: 36,
    referidos: ["#SantiagoCorrea"],
  },
];
export const Usuarios = () => {
  const [Users, setUsers] = useState([]);
  const [formUser, setForm] = useState({
    usuario: "",
    referente: "",
  });
  useEffect(() => {
    const funcionRenovacion = async () => {
      const res = await fetchCToken("usuarios");
      if (res.ok) {
        setUsers(res.user);
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
        </Grid>
        <Grid
          item
          xs={6}
          md={8}
          className="grid-comisiones"
          sx={{ padding: "0 40px !important" }}
        >
          <h2 style={{ marginBottom: "40px" }}>Usuarios</h2>

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
                {Users.map((user) => (
                  <CeldaUsers user={user} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};
