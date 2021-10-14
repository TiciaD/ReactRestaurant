import React, { Component } from 'react';
import Menu from './Menu';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Bootstrap Bob's Diner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#">OUR MENU</Nav.Link>
                    <Nav.Link href="#">ABOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
