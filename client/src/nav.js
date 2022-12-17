import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBarHead = () => {
return (
    <div style={{backgroundImage: "linear-gradient(to right, #610acd , #1acbe3)"}}>
      <Navbar bg="none" variant="dark" expand="lg">
        <Container style={{marginLeft:"0"}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/magical-logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              style={{borderRadius:"5px"}}
            />
            <strong style={{color: "white", fontSize:"30px",marginLeft:"10px"}}>PG-Assistance</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Login</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
);
};
export default NavBarHead;
