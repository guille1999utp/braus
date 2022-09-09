import React, { useEffect, useState } from "react";
import "./catalogo.scss";
import Beneficios from "./beneficios";
import useMediaQuery from '@mui/material/useMediaQuery';
import { fetchstoken } from "../helpers/fetchMethods";

const Catalogo = () => {
  const [imageProducto, setImageProducto] = useState();
  const [ViewImage, setViewImage] = useState(false);
  const matches = useMediaQuery('(min-width:500px)');
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const funcionRenovacion = async () => {
      const res = await fetchstoken("producto");
      if (res.ok) {
        setProducts(res.products);
      }
    };
    funcionRenovacion();
  }, []);

  return (
    <>

        {(ViewImage)?<Beneficios image={imageProducto} fun={setViewImage} />:null}
        <div className="homeAdmin" style={{justifyContent:matches?"center":"space-between",padding:matches?"20px":"2px"}}>
          {Products.map((product)=><div className="producto">
            <img onClick={()=>{
              setViewImage(true)
              setImageProducto(product.fotosdescripsion)
              }} src={product.fotosdescripsion}></img>
            <p>{product.titulo} </p>
            <p style={{marginTop:"0"}}>{"$" + new Intl.NumberFormat().format(product.precio)}</p>
          </div>) }
        </div>
    </>
  );
};

export default Catalogo;
