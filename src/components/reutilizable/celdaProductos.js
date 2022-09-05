import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { fetchCToken } from "../../helpers/fetchMethods";
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const CeldaProductos = ({ producto, idProducto,func }) => {
  const [editar, setEditar] = useState(false);
  const [urlmas, setUrl] = useState({
    secure_url:
      "https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg",
    public_id: 0,
  });

  const [form, setForm] = useState({
    titulo: producto.titulo,
    precio: producto.precio,
  });

  const onChangeMensaje = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onFilesave = async (e) => {
    const file = e.target.files[0];
    setUrl(file);
  };
  const onFile = () => {
    document.querySelector(`#fileproducto${idProducto}`).click();
  };

  const eliminarproducto = () => {
    Swal.fire({
      title: "estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
    }).then(async(result) => {
      if (result.isConfirmed) {
      const productoDelete = await fetchCToken('producto', {pid:producto.pid} , 'DELETE');
        if(productoDelete.ok){
          func(producto.pid)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "producto eliminado con exito",
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "error al eliminar producto",
            showConfirmButton: false,
            timer: 1500,
          });
        }

      }
    });
  };

  return (
    <StyledTableRow key={producto.foto}>
      <StyledTableCell align="center">
        <img
          src={producto.fotosdescripsion}
          width="200"
          onClick={onFile}
          style={{ cursor: "pointer" }}
        ></img>
      </StyledTableCell>
      <StyledTableCell align="center">
        {editar ? (
          <input
            type="text"
            onChange={onChangeMensaje}
            name="titulo"
            value={form.titulo}
          />
        ) : (
          producto.titulo
        )}
      </StyledTableCell>
      <StyledTableCell align="center">
        {editar ? (
          <input
            type="number"
            onChange={onChangeMensaje}
            name="precio"
            value={form.precio}
          />
        ) : (
          `$${new Intl.NumberFormat().format(parseInt(producto.precio))}`
        )}
      </StyledTableCell>
      <StyledTableCell align="center">
        {!editar ? (
          <>
            <button
              style={{
                padding: "4px 14px",
                borderRadius: "3px",
                border: "solid 1px black",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
              type="button"
              onClick={eliminarproducto}
            >
              Borrar
            </button>
            <button
              onClick={() => setEditar(!editar)}
              style={{
                marginLeft: "20px",
                padding: "4px 14px",
                borderRadius: "3px",
                border: "solid 1px black",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
            >
              Editar
            </button>
          </>
        ) : (
          <>
            <button
              style={{
                padding: "4px 14px",
                borderRadius: "3px",
                border: "solid 1px black",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
            >
              Guardar
            </button>
            <button
              onClick={() => setEditar(!editar)}
              style={{
                marginLeft: "20px",
                padding: "4px 14px",
                borderRadius: "3px",
                border: "solid 1px black",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
          </>
        )}
      </StyledTableCell>
      <input
        type="file"
        id={`fileproducto${idProducto}`}
        aria-label="File browser example"
        onChange={onFilesave}
        style={{ display: "none" }}
      ></input>
    </StyledTableRow>
  );
};
