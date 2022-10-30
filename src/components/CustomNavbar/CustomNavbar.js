import './CustomNavbar.scss';
import logo from '../../assets/bookshop.png';
import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
export const CustomNavbar = () => {
  
  return (
    <>
      <div>
        <NavLink to={'/books'} className='Item' ><img src={logo} height={40} width={40} href="#home" alt='logo' /></NavLink>
        <NavLink to={'/books'} className='Item' >Inicio</NavLink>
        <NavLink to={'/faq'} className='Item' >Preguntas frecuentes</NavLink>
        <NavLink to={'/about'} className='Item' >Nosotros</NavLink>
      </div>
      <CartWidget />
    </>
  );
}