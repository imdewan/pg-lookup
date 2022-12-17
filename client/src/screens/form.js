import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBarHead from '../nav';
const Formofpg = () => {
return (
	<div>
    <NavBarHead />
    <div style={{padding:"40px",maxWidth:"400px"}}>
    <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="latitude">Latitude</Form.Label>
          <Form.Control id="latitude" placeholder="Latitude" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="longitude">Longitude</Form.Label>
          <Form.Control id="longitude" placeholder="Longitude" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name of the pg">Name of the PG</Form.Label>
          <Form.Control id="name of the pg" placeholder="Enter name of the PG" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="monthly price">Monthly Price</Form.Label>
          <Form.Control id="monthly price" placeholder="Enter the monthly price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="advance payment">Advance Payment</Form.Label>
          <Form.Control id="advance payment" placeholder="Enter the advance payment price" />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </div>
	</div>
);
};

export default Formofpg;