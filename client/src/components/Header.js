import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import ProductList from './ProductList';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import Mainbox from '../container/Mainbox';


function Header() {
    return (
        <Router>

            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="/">Global Shoes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/product/men">Men's</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/product/men/sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="/product/men/evening_wear">Evening wear</NavDropdown.Item>
                            <NavDropdown.Item href="/product/men/casual">Casual</NavDropdown.Item>
                            <NavDropdown.Item href="/product/men/sandles">Sandles</NavDropdown.Item>
                            <NavDropdown.Item href="/product/menslippers">Slippers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/product/women">Womens</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/women/sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="/women/evening_wear">Evening wear</NavDropdown.Item>
                            <NavDropdown.Item href="/women/casual">Casual</NavDropdown.Item>
                            <NavDropdown.Item href="/women/sandles">Sandles</NavDropdown.Item>
                            <NavDropdown.Item href="/women/slippers">Slippers</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/men/casual" element={<ProductList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/men/sports" element={<Mainbox />} />
            </Routes>
        </Router>
    );
}

export default Header;
