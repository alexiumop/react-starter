import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
//Enterprise Logo
import EntLogo from '../../assets/Logo-Baufest-blanco.png'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Image src={EntLogo} /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">SERVICIOS</Nav.Link>
                        <Nav.Link href="#features">INDUSTRIAS</Nav.Link>
                        <Nav.Link href="#pricing">BLOGFEST</Nav.Link>
                        <Nav.Link href="#pricing">NOSOTROS</Nav.Link>
                        <Nav.Link href="#pricing">TRABAJAR EN BAUFEST</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;