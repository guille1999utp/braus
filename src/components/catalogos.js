import React, { useState } from "react";
import "./home.scss";
import { AiOutlineUserAdd, AiOutlinePercentage } from "react-icons/ai";
import { BsGenderMale } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
const Catalogo = () => {
  const [Admin, setAdmin] = useState(true);
  const navigate = useNavigate();
  const onClick = (location) => {
    console.log(location);
    navigate(`../${location}`);
  };
  return (
    <>
      {Admin ? (
        <div className="homeAdmin">
          <div className="panelAdmin" onClick={() => onClick("Usuarios")}>
            <AiOutlineUserAdd fontSize={90} className="iconHome" />
            <p>Usuarios</p>
          </div>
          <div className="panelAdmin" onClick={() => onClick("porcentaje")}>
            <AiOutlinePercentage fontSize={90} className="iconHome" />
            <p>Porcentajes</p>
          </div>
          <div className="panelAdmin" onClick={() => onClick("Hombres")}>
            <RiShoppingBagLine fontSize={90} className="iconHome" />
            <p>Catalogo</p>
          </div>
        </div>
      ) : (
        <div className="home">
          <h2>#GUille1999</h2>
          <p>50%</p>
          <p style={{ marginTop: "-7px", fontSize: "18px" }}>
            Porcentaje acumulado
          </p>
        </div>
      )}
    </>
  );
};

export default Catalogo;
