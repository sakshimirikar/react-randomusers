import axios from 'axios';
import React , {useState,useEffect }from 'react';
// import {Container,Row,Col} from "reactstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import { Card, Col, Container, Row } from 'reactstrap';
import MyCard from './MyCard';

function App() {
  //state details to store the data we got from requests
const [details,setDetails]=useState({})

//meythod to handle the data(response)
const fetchDetails=async()=>{
  const {data}=await Axios.get('https://randomuser.me/api/');
  console.log("RESPONSE" , data)
  const details=data.results[0]

  //updating the state
  setDetails(details)
}

useEffect(()=>{
  fetchDetails()

} ,[])

  return (
    <div>
      <Container fluid className="p-4 bg-secondary App">
          <Row>
            <Col md={4} className="offset-md-4 mt-4">
               <MyCard details ={details}/>
            </Col>
          </Row>

      </Container>
    
    </div>
  );
}

export default App;
