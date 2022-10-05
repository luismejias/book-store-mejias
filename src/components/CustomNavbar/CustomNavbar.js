import './CustomNavbar.scss';
import logo from '../../assets/bookshop.png';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
export const CustomNavbar = () => {
  return (
    <>
      <div>
        <Link to={'/'} className='Item' ><img src={logo} height={40} width={40} href="#home" className='Item' alt='logo' /></Link>
        <Link to={'/'} className='Item' >Home</Link>
        <Link to={'/faq'} className='Item' >Faq</Link>
        <Link to={'/about'} className='Item' >About</Link>
      </div>
      <CartWidget />
    </>
  );
}