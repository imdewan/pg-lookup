import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button, Row,Container, Col} from 'react-bootstrap';
import NavBarHead from '../nav';
import axios from "axios";
const Details = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const lath = queryParams.get('lat');
    const lngh = queryParams.get('lng');
    const [post, setPost] = React.useState(null);
    const [post1, setPost1] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:9000/pgdetails?lat="+lath+"&lng="+lngh).then((response) => {
      setPost(response.data);
      //setPost1(response.data[0]);
    });
  }, []);
  console.log(post);
  if(post !== null){
  post.forEach(myFunction);
  }
  function myFunction(item, index) {
    if(item.lat=lath){
        console.log(item);
        //setPost1(item);
    } 
  }
return (
	<div>
    <NavBarHead />
    <div style={{paddingTop:"40px",}}>
    <Container>
    <Row>
        <Col>
        <img style={{borderRadius:"10px",maxWidth:"95vw"}} src="https://is1-2.housingcdn.com/01c16c28/3edcf3c6be94214436e558356552ce4b/v0/large/3_rk_-for-rent-marathahalli-Bangalore-others.jpg" />
        </Col>
        <Col>
        <center><h1>PG1</h1></center> <br/>
        <p>Our paying guest(pg) accomodation for ladies located steps away from Dayananda sagar college, Sri ayurvedic college and Art of living(kanakapura main road). Single and two sharing rooms available with attached bathroom. we provide three times healthy and delicious food.</p>

        </Col>
    </Row>
    </Container>
    </div>
	</div>
);
};

export default Details;