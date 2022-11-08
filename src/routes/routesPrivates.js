import React, { useContext } from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import { ContextAuth } from "../context/contextAuth";

export const RoutePrivate = () => {
  const  { User } = useContext(ContextAuth);
    return User.rol === "Admin" || User.rol === "User"? <Outlet /> : <Navigate to="/login" />;
}