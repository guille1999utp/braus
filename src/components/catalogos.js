import React, { useState } from "react";
import "./catalogo.scss";
import Beneficios from "./beneficios";
import useMediaQuery from '@mui/material/useMediaQuery';

const Catalogo = () => {
  const [imageProducto, setImageProducto] = useState("https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY");
  const [ViewImage, setViewImage] = useState(false);
  const matches = useMediaQuery('(min-width:500px)');

  return (
    <>

        {(ViewImage)?<Beneficios image={imageProducto} fun={setViewImage} />:null}
        <div className="homeAdmin" style={{justifyContent:matches?"center":"space-between",padding:matches?"20px":"2px"}}>
          <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div>
          <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div> <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div><div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div>
          <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div> <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div><div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div>
          <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div> <div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div><div className="producto">
            <img onClick={()=>setViewImage(true)} src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div>
          <div className="producto">
            <img src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div> <div className="producto">
            <img src="https://imgs.search.brave.com/W7yj7ewexsiE-QRxVkTaLKETwHq6YDMnXHAXZvaDcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuc2FvcGF1bG9t/YW5pYS5jb20uYnIv/cHJvZHV0b3MvY2Ft/aXNhLXNhby1wYXVs/by1qdXZlbmlsLTE5/ODAtcmV0cm8tbWFu/aWEvMTQvVDcwLTA2/NTQtMDE0L1Q3MC0w/NjU0LTAxNF96b29t/MS5qcGc_dHM9MTU3/MzA3MDg4MyY"></img>
            <p>camisa de cuadros </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(20500)}</p>
          </div>
        </div>
    </>
  );
};

export default Catalogo;
