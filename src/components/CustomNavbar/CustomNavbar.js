/* eslint-disable jsx-a11y/alt-text */
import './CustomNavbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/bookshop.png';

export const CustomNavbar = ()=>  {
  return (
    <Navbar expand="xxl" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='Item'>
        <img src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='Item'>Home</Nav.Link>
            <Nav.Link href="#about" className='Item'>About</Nav.Link>
            <Nav.Link href="#faq" className='Item'>Faq</Nav.Link>
            <Nav.Link href="#products" className='Item'>Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}