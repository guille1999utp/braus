import React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Header  from "../components/header";
import Home from "../components/home";
import { Inicio } from "../components/inicio";
import Login from "../components/login";
import { Porcentajes } from "../components/porcentajes";
import Register from "../components/register";
import { Usuarios } from "../components/usuarios";


export default function RoutesPage() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/usuarios" element={ <Usuarios />} />
          <Route path="/porcentaje" element={ <Porcentajes />} />
          <Route path="/" element={ <Inicio />} />
    </Routes>
    </BrowserRouter>
  );
}