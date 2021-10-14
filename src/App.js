import React, { Component } from 'react';
import Menu from './Menu';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 bg-dark bg-gradient">
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
        <footer className="bg-light bg-gradient">
            <Container className="mt-auto">
                <p>Address</p>
                <p>Hours:</p>
            </Container>
        </footer>
    </div>
  );
}

export default App;
