import React, { useContext } from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import { ContextAuth } from "../context/contextAuth";

export const RouteAdmin = () => {
  const  { User } = useContext(ContextAuth);
    return User.rol === "Admin"? <Outlet /> : <Navigate to="/login" />;
}