import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import {FaMapMarkedAlt} from 'react-icons/fa'


const MyCard=({details})=>{
     return (
         <Card>
             <CardBody className="text-center">
               <img height="15opx" width="150px"
               className="rounded-circle img-thumbnail border-danger"
               src={details.picture?.thumbnail}/>
               <CardTitle className="text-primary">
                 <h1>
                   <span className="pr-2">{details.name?.title}</span>
                    <span>  {details.name?.first}</span>
                      <span>{details.name?.last}</span>
                 </h1>

               </CardTitle>
               <CardText>
                 <FaMapMarkedAlt/>
                 {details.location?.city}

                 <p>{details.phone}</p>
                 <p>{details.email}</p>
                 <p>{details.dob?.date}</p>
                
               </CardText>
               
             </CardBody>
         </Card>
     )
}

export default MyCard;