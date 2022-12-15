import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarHead = () => {
return (
    <div style={{backgroundImage: "linear-gradient(to right, #610acd , #1acbe3)"}}>
      <Navbar bg="none" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/magical-logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              style={{borderRadius:"5px"}}
            />
            <strong style={{color: "white", fontSize:"30px",marginLeft:"10px"}}>PG-LookUp</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    
);
};

export default NavBarHead;
