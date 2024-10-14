import React, { useEffect, useState } from 'react'
import './ViewRest.css'
import { useParams } from 'react-router-dom'
import { base_url } from '../base_url'
import axios from 'axios'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/RestOp'
import RestRev from '../RestRev/RestRev'


function ViewRest() {
  // To get particular id from url
  // const pathparams = useParams()
  // console.log(pathparams.id);
  const {id} = useParams() //Destructuring using id
  console.log(id);

  //create a state for holding restaurants details
  const [restDetails,setRestDetails]=useState([])
  //make an Api call to fetch particular restaurant details
  const fetchData=async()=>{
    const {data} = await axios.get(`${base_url}/restaurants/${id}`)
    console.log(data);
    setRestDetails(data)
  }
  console.log(restDetails);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    {
      restDetails?
      <Row>
      <Col>
    {/* Image */}
      <Image style={{height:'550px', width:'500px', border:'5px dashed white', padding:'20px', margin:'10px'}} src={`${restDetails.photograph}`} fluid/>
      </Col>
      <Col style={{marginRight:'4rem'}}>
      {/* List */}
      <MDBListGroup style={{ minWidth: '22rem', padding:'100px', }} light>
        <h1 className='text-light'>{restDetails.name}</h1>
      <MDBListGroupItem
        tag='button'
        action
        noBorders
        active
        aria-current='true'
        type='button'
        className='px-3'
      >
        Address : {restDetails.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
       Cuisine Type :  {restDetails.cuisine_type}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
       Neighborhood :  {restDetails.neighborhood}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        <RestOp op={restDetails.operating_hours}/>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
        <RestRev rev={restDetails.reviews} />
      </MDBListGroupItem>
    </MDBListGroup>
      </Col>
      
    </Row>: <p>No data</p>
    }
    </>
  )
}

export default ViewRest