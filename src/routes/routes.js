import React, { useContext } from "react";
import {Routes,Route,BrowserRouter,Navigate} from "react-router-dom";
import Catalogo from "../components/catalogos";
import Header  from "../components/header";
import { Hombres } from "../components/hombres";
import Home from "../components/home";
import { Inicio } from "../components/inicio";
import Login from "../components/login";
import { Porcentajes } from "../components/porcentajes";
import Register from "../components/register";
import { Usuarios } from "../components/usuarios";
import { RouteAdmin } from "./routesAdmin";
import { RoutePrivate } from "./routesPrivates";
import { RoutePublic } from "./rutaPublica";


export default function RoutesPage() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route element={<RoutePublic/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  
          </Route>
          <Route  element={<RoutePrivate/>}>
            <Route path="/home" element={ <Home />} />
          </Route>
          <Route  element={<RouteAdmin/>}>
            <Route path="/usuarios" element={ <Usuarios />} />
            <Route path="/porcentaje" element={ <Porcentajes/> } />
            <Route path="/Hombres" element={ <Hombres/>} />
          </Route>
          <Route path="/catalogos" element={ <Catalogo />} />
          <Route path="/" element={ <Inicio />} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
    </BrowserRouter>
  );
}