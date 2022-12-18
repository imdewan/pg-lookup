import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBarHead from '../nav';
const Formofpg = () => {
return (
	<div>
    <NavBarHead />
    <div style={{padding:"40px",maxWidth:"400px"}}>
    <Form action='http://localhost:9000/addpg' method="post">
        <Form.Group className="mb-3" >
          <strong>Leave the First Two fields if you are in the PG</strong><br/>
          <Form.Label htmlFor="latitude">Latitude</Form.Label>
          <Form.Control name="latitude" placeholder="Latitude" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="longitude">Longitude</Form.Label>
          <Form.Control name="longitude" placeholder="Longitude" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name of the pg">Email</Form.Label>
          <Form.Control name="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name of the pg">Phone</Form.Label>
          <Form.Control name="phone" placeholder="Phone no" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name of the PG</Form.Label>
          <Form.Control name="name" placeholder="Enter name of the PG" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Password</Form.Label>
          <Form.Control name="password" placeholder="Password " />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="monthly price">Monthly Price</Form.Label>
          <Form.Control name="payment" placeholder="Enter the monthly price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="advance payment">Advance Payment</Form.Label>
          <Form.Control name="advance" placeholder="Enter the advance payment price" />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </div>
	</div>
);
};

export default Formofpg;