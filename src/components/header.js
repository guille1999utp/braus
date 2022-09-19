import "./header.scss";
import React, { useState,useContext } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineShopping,
  AiFillRead,
} from "react-icons/ai";
import { MdCardMembership } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/icono.png";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ContextAuth } from "../context/contextAuth";

const Header = () => {
  const  { Logout,User } = useContext(ContextAuth);
  const [state, setState] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const redirect = (direccion) => {
    navigate(direccion);
  };

  const LogoutHeader = () => {
    Logout();
    redirect("/")
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "#000000e6",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          key={"Catalogo"}
          disablePadding
          onClick={() => redirect("/catalogos")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AiOutlineShopping color="white" />
            </ListItemIcon>
            <ListItemText primary={"Catalogo"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Activar membresia"}
          disablePadding
          onClick={() => redirect("/register")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MdCardMembership color="white" />
            </ListItemIcon>
            <ListItemText
              primary={"Activar membresia"}
              sx={{ color: "white" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Referidos Brous"}
          disablePadding
          onClick={() => redirect("/video")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemIcon>
              <IoIosPeople color="white" />
            </ListItemIcon>
            <ListItemText primary={"Referidos Brous"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Sobre Nostros"}
          disablePadding
          onClick={() => redirect("/perfil")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AiFillRead color="white" />
            </ListItemIcon>
            <ListItemText primary={"Sobre Nostros"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <Divider color="white" />
      </List>
     {(User.rol)? <List>
        <ListItem
          key={"Terminos y Condiciones"}
          disablePadding
          onClick={() => redirect("/perfil")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton onClick={LogoutHeader}>
            <ListItemIcon>
              <RiLogoutCircleRLine color="white" />
            </ListItemIcon>
            <ListItemText
              primary={"Cerrar sesion"}
              sx={{ color: "white" }}
            />
          </ListItemButton>
        </ListItem>
      </List>:null}
    </Box>
  );

  return (
    <>
      <nav
        style={{
          position: location.pathname === "/" ? "absolute" : "relative",
          width: "100%",
          zIndex: "2",
        }}
      >
        <div
          className="menu-first"
          style={{
            backgroundColor:
              location.pathname === "/" ? "rgba(0,0,0,0)" : "black",
            borderBottom: "0px solid black",
          }}
        >
            <div>
              <AiOutlineMenu
                fontSize={25}
                color="white"
                style={{ marginLeft: "20px", cursor: "pointer" }}
                onClick={toggleDrawer(true)}
              />
            </div>
            {(location.pathname !== "/home")?<a className="whatsappButton" href="https://api.whatsapp.com/send?phone=573147089430&text=hola%20buenos%20dias,%20estoy%20interesado%20en%20el%20contenido%20de%20la%20pagina">
            <AiOutlineWhatsApp fontSize={25} color="white" />
            </a>:null}
            
          <ul className="redes">
            
            <li>
              <a href="https://www.facebook.com/BROUS-109184671936238">
                <AiFillFacebook fontSize={25} />
              </a>
            </li>
            <li>3
              <a href="https://www.instagram.com/brousoriginal/" >
                <AiFillInstagram fontSize={25} />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=573147089430&text=hola%20buenos%20dias,%20estoy%20interesado%20en%20el%20contenido%20de%20la%20pagina">
                <AiOutlineWhatsApp fontSize={25} />
              </a>
            </li>
          </ul>
          <Link to="/" className="linkinicio">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <div className="actiones">
            <Link to="/login" className="actions">
              <AiOutlineUser fontSize={25} />
            </Link>
          </div>
        </div>
      </nav>
      <Drawer  anchor={"left"} open={state} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)} >
        {list("left")}
      </Drawer>
    </>
  );
};
export default Header;
