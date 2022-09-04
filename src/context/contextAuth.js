import React, {useEffect, createContext,useState} from 'react'
import { fetchCToken } from '../helpers/fetchMethods';

export const ContextAuth = createContext();
export const ContextProvider = ({ children }) => {
    const initData ={
        nombre: "",
        apellido: "",
        usuario: "",
        rol: "",
        porcentaje: 0,
    }
    const [User, setUser] = useState(initData)

    const AgregarUser = (user) =>{
      setUser(user);
      
    }

     useEffect(() => {
       const funcionRenovacion =  async() => {
            const token = localStorage.getItem('token');
            if(!token){
             setUser(initData)
             return  false;
           }
            const res = await fetchCToken('renovacion');
            console.log(res)
     
            if(res.ok){
             const {password,correo,creacion,...rest} = res.usuario
             setUser(rest);
              localStorage.getItem('token',res.token);
            }
          }
          funcionRenovacion()
     }, [])

    
    return (
        <ContextAuth.Provider value={{ User,AgregarUser }}>
            { children }
        </ContextAuth.Provider>
    )
}