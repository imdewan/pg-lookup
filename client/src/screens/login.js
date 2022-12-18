import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
const [flip, setFlip] = useState(false);
return (
<div style={{width:"100vw",height:"100vh",background:"#000f29", display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>  

    <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal"> 
    {/* Login Form */}
    <div style={{
    width:"400px",
    color:"white", 
    margin:"auto",
    padding:"20px",
    boxShadow: "0px 0px 24px 0px rgba(255,255,255,1)",
    borderRadius:"10px",
    maxWidth:"100vw",maxHeight:"100vh",
    }}>
        <center>
        <img 
              alt=""
              src="/images/magical-logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              style={{borderRadius:"50%", margin:"5px"}}
            />
        </center>
        <Form method="post" action="http://localhost:9000/login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" style={{width:"100%"}} type="submit">
            Submit
        </Button>
        <button type="button" style={{
                    fontSize: '15px',
                    color:"#0084ff",
                    background:"none",
                    border:"none",
                    width:"100%",
                    margin:"5px"
                }} onClick={() => setFlip(!flip)}>
                    New User? Sign Up Here</button>
        </Form>
    </div>
    {/* Sign Up Form */}
    <div style={{
    width:"400px",
    color:"white", 
    margin:"auto",
    padding:"20px",
    boxShadow: "0px 0px 24px 0px rgba(255,255,255,1)",
    borderRadius:"10px",
    maxWidth:"100vw",maxHeight:"100vh",
    }}>
        <center>
        <img 
              alt=""
              src="/images/magical-logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              style={{borderRadius:"50%", margin:"5px"}}
            />
        </center>
        <Form method="post" action="http://localhost:9000/register">
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="age" placeholder="Enter Age" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Phone/Mobile</Form.Label>
            <div>
            <strong style={{width:"10%"}}>+91</strong>
            <Form.Control style={{width:"90%"}} type="number" name="phone" placeholder="Enter Phone number" required />
            </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender" aria-label="Default select">
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
            </Form.Select>
        </Form.Group>
         
        <Button variant="primary" style={{width:"100%"}} type="submit">
            Submit
        </Button>
        <button type="button" style={{
                    fontSize: '15px',
                    color:"#0084ff",
                    background:"none",
                    border:"none",
                    width:"100%",
                    margin:"5px"
                }} onClick={() => setFlip(!flip)}>
                    Already SignedUp? Login Here</button>
        </Form>
    </div>
    </ReactCardFlip> 
</div>
);
};

export default Login;