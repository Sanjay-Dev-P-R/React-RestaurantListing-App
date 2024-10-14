import React, { useState } from 'react'
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';

function RestRev({rev}) {
    console.log(rev);

    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

  return (
    <>
     
      <p onClick={toggleShow}>Reviews<i class="fa-solid fa-arrow-right m-1"></i></p>
      <MDBCollapse show={showShow}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse>
      <MDBCollapse show={showShow}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse>
    </>
  )
}

export default RestRev