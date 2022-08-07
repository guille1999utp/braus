import './header.scss';
import React, {useState} from 'react'
import { AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp,AiOutlineUser,AiOutlineMenu,AiOutlineShopping,AiFillRead } from "react-icons/ai";
import { MdCardMembership } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { RiNewspaperLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Logo from "../assets/icono.png"
import { useLocation,useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
const [state, setState] = useState(false);
let location = useLocation();
let navigate = useNavigate();

const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState(open);
};

const redirect = (direccion) => {
  navigate(direccion);
  }


const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,background:"#000000e6",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between" }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}

  >
    
    <List>
        <ListItem key={"Catalogo"} disablePadding onClick={()=> redirect("/categorias/todos")} sx={{":hover":{opacity:"0.58"}}}>
          <ListItemButton>
            <ListItemIcon>
            <AiOutlineShopping color='white' />
            </ListItemIcon>
            <ListItemText primary={"Catalogo"} sx={{color:"white"}}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Activar membresia"} disablePadding onClick={()=> redirect("/register")} sx={{":hover":{opacity:"0.58"}}}>
          <ListItemButton>
            <ListItemIcon>
            <MdCardMembership  color='white'/>
            </ListItemIcon>
            <ListItemText primary={"Activar membresia"} sx={{color:"white"}}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Referidos Brous"} disablePadding onClick={()=> redirect("/video")} sx={{":hover":{opacity:"0.58"}}}>
          <ListItemButton>
            <ListItemIcon>
            <IoIosPeople color='white'/>
            </ListItemIcon>
            <ListItemText primary={"Referidos Brous"} sx={{color:"white"}}/>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Sobre Nostros"} disablePadding onClick={()=> redirect("/perfil")} sx={{":hover":{opacity:"0.58"}}}>
          <ListItemButton>
            <ListItemIcon>
            <AiFillRead color='white'/>
            </ListItemIcon>
            <ListItemText primary={"Sobre Nostros"} sx={{color:"white"}} />
          </ListItemButton>
        </ListItem>
        <Divider color='white'/>
      
    </List>
    <List>
    <ListItem key={"Terminos y Condiciones"} disablePadding onClick={()=> redirect("/perfil")} sx={{":hover":{opacity:"0.58"}}}>
          <ListItemButton>
            <ListItemIcon>
            <RiNewspaperLine color='white' />
            </ListItemIcon>
            <ListItemText primary={"Terminos y Condiciones"} sx={{color:"white"}} />
          </ListItemButton>
        </ListItem>
    </List>
  </Box>
);

  return (
    <>
    <nav style={{position:(location.pathname === "/")?"absolute":"relative",width:"100%",zIndex:"2"}}>
     <div className='menu-first' style={{backgroundColor:(location.pathname === "/")? "rgba(0,0,0,0)" :"black",borderBottom:"0px solid black"}}>
      <ul className="redes">
       <li><AiOutlineMenu fontSize={25} color="white" style={{marginRight:"20px",cursor:"pointer"}} onClick={toggleDrawer(true)}/></li>
       <li><a href='/crearproducto' ><AiFillFacebook fontSize={25} /></a></li>
       <li><a href='/ordenar'><AiFillInstagram fontSize={25}/></a></li>
       <li><a href='/chat'><AiOutlineWhatsApp fontSize={25}/></a></li>
      </ul>
      <Link to='/' className='linkinicio'><img src={Logo} alt='image-logo' className='logo'/></Link> 
      <div className='actiones'>
        <Link to='/login' className='actions'><AiOutlineUser fontSize={25}/></Link>
        </div>
      </div>
      <div className='menu-second' style={{backgroundColor:(location.pathname === "/")? "rgba(0,0,0,0)" :"black"}}>
      <ul className="redes">
       <li><a href='/catalogos' style={{marginLeft:"91px"}}>Catalogos</a></li>
      </ul>
      </div>
    </nav>
    <Drawer
     anchor={'left'}
     open={state}
     onClose={toggleDrawer(false)}
   >
     {list('left')}
   </Drawer>
    </>
  );
}
export default Header;