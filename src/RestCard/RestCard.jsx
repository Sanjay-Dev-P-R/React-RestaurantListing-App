import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';
  

function RestCard({restaurant}) {
  console.log(restaurant);
    return (
        <div>
            <Link to={`view/${restaurant.id}`}>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={restaurant.photograph} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{restaurant.name}</MDBCardTitle>
          <MDBCardText>
           Address:{restaurant.address}
           <br />
           Cusinie Type: {restaurant.cuisine_type}

          </MDBCardText>
          {/* <MDBBtn href='#'>Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
      </Link>
      </div>
  )
}

export default RestCard