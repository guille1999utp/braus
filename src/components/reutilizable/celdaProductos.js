import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { fetchCToken } from "../../helpers/fetchMethods";
import Swal from "sweetalert2";
import {UploadPhoto} from "../../helpers/cloudinaryUpload";

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
  const [ImageCapture, setImageCapture] = useState({
    image:{
      fotosdescripsion:producto.fotosdescripsion,
      fotosId:producto.fotosId
          },
    info:{
    titulo: producto.titulo,
    precio: producto.precio,
    }
});
  const [urlmas, setUrl] = useState({
    fotosdescripsion:producto.fotosdescripsion,
    fotosId:producto.fotosId
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

  const guardar = async() =>{
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
      let url = {
        secure_url: producto.fotosdescripsion,
        public_id: producto.fotosId,
        };
      if(((!!urlmas.fotosId)?urlmas.fotosId:null) === urlmas.fotosId || urlmas.fotosId === 0){ 
       }else{
        url = await UploadPhoto(urlmas);
       }
        const bodyRes = {
          ...form,
          fotosdescripsion: url.secure_url,
          fotosId: url.public_id,
          id:producto.pid
        }
        const res = await fetchCToken('producto',bodyRes,"PUT");
      
        if(res.ok){
          Toast.fire({
            icon: 'success',
            title: 'Informacion Guardada'
          })  
          setUrl({
            fotosdescripsion: url.secure_url,
            fotosId: url.public_id
        })
        setImageCapture({
          info:{
            titulo: form.titulo,
            precio: form.precio,
          },
          image:{
            fotosdescripsion: url.secure_url,
            fotosId: url.public_id
          }
          
      })
        }else{
          Toast.fire({
            icon: 'error',
            title: res.errors.msg
          })  
          setForm({
            titulo: producto.titulo,
            precio: producto.precio,
          })
        }
        
        setEditar(!editar)
        
      }
  

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
    <StyledTableRow >
      <StyledTableCell align="center">
        <img
          alt={`tile producto`}
          src={urlmas.fotosdescripsion}
          width="200"
          onClick={editar? onFile : null}
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
          form.titulo
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
          `$${new Intl.NumberFormat().format(parseInt(form.precio))}`
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
              onClick={guardar}
            >
              Guardar
            </button>
            <button
              onClick={() => {
                setUrl(ImageCapture.image)
                setForm({
                  titulo: ImageCapture.info.titulo,
                  precio: ImageCapture.info.precio,
                })
                setEditar(!editar)
              }}
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
