/* eslint-disable jsx-a11y/alt-text */
import './CustomNavbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/bookshop.png';
export const CustomNavbar = ()=>  {
  return (
    <Navbar>
      <Container>        
        <img src={logo} height={40} width={40} href="#home" className='Item'/>        
          <Nav className="me-auto">
            <Nav.Link href="#home" className='Item'>Home</Nav.Link>
            <Nav.Link href="#about" className='Item'>About</Nav.Link>
            <Nav.Link href="#faq" className='Item'>Faq</Nav.Link>
            <Nav.Link href="#products" className='Item'>Products</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}