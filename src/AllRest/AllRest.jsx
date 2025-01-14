import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestCard from '../RestCard/RestCard'
import { base_url } from '../base_url'



function AllRest() {

  const baseUrl = 'http://localhost:3001'
  // state creation 
  const [allRest,setAllRest]=useState([])

  const fetchData = async () => {
    const {data} = await axios.get(`${base_url}/restaurants`)///destructuring 
    console.log(data);// array of data
    setAllRest(data)
  }
  console.log(allRest);


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h1 className='text-center'><i className='fa-solid fa-home'></i>RESTAURANT LISTING APP</h1>
    
    <Row>
      {
        allRest.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3} className="mb-4">
          <RestCard restaurant={item}/>

          </Col>
        ))
      }

    </Row>
    </>
  )
}

export default AllRest