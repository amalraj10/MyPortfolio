import React from 'react'
import './Style.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import nestquest from '../images/Screenshot 2024-01-22 2034541.png'
import cartify from '../images/Screenshot 2023-12-19 120718.png'
import weathernet from '../images/Screenshot 2024-01-22 192248.png'
import NFOO from '../images/nfoo.png'
import Netflix from '../images/netflix .png'
import Intrest from '../images/Screenshot 2024-01-22 192757.png'
import BMI from '../images/BMI (1).png'
import Nomadic from '../images/Screenshot 2023-12-19 120518.png'
import './st.css'

function Portfolio() {
  return (
    <div>
<div className='mt-5'>
   <center><h1 style={{color:"white"}}> <b>Latest <span style={{color:"#fcb045"}}>Projects</span></b></h1></center> 
<Container>
    <Row style={{marginBottom:"2%"}}>   
        <Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={nestquest} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>NESTQUEST</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
               <Button  href='https://nestquest-zeta.vercel.app/'  variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                   <Button href='https://youtu.be/kO3O7pV0Hlg?si=k9wyhShwvKK7_uNy'   style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={cartify} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>CARTIFY</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
           <Button  href='https://cartify-front-end.vercel.app/'  variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                    <Button href='https://youtu.be/S4ZUWplnG_A?si=c_d4_1_wX3gAWQcy'  style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={weathernet} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>WEATHER NET</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
               <Button href='https://weather-net-beta.vercel.app/'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                  <Button href='https://youtu.be/Coqn4UY38FQ?si=ATd50FvMGs_2nrZ5'  style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={NFOO} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>NFOO - RESTAURENTS</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
               <Button href='https://nfoo-foods.vercel.app/'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                   <Button href='https://youtu.be/lTv5SkeibZs?si=egMM2naG1wJFKpey'   style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>

<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={Netflix} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>NETFLIX CLONE</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
               <Button href='https://netflixclone-peach-ten.vercel.app/'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                  <Button href='https://youtu.be/iEG-E1QIOPQ?si=KH_SkErwJDhhUUdp'  style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className='mt-5  ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={Intrest} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>  SIMPLE INTEREST </b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
               <Button href='https://intrest-app.vercel.app/'   variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
               <Button href='https://youtu.be/d_U_06Y3VR0?si=mYKzKbMFH1KQ04az'   style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5 ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={BMI} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>BMI - CALCULATOR</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
             <Button  href='https://bmi-calc-psi.vercel.app/'  variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                <Button href='https://youtu.be/d_U_06Y3VR0?si=RcuhgG2pw0f3H4ht'  style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>
<Col md={3}>
<div className='mt-5 me-5'>
<Card data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='mt-5 ' style={{ width: '18rem',boxShadow: ' 2px 10px 8px black'}}>
          <Card.Img variant="top" style={{ height: '250px' }} className='p-2'  src={Nomadic} />
          <Card.Body>
          <center>  <Card.Title style={{color:"black"}}> <b>NOMADIC TRAVEL</b></Card.Title></center>
            
            <div className='d-flex align-items-center justify-content-between mt-3'>
             <Button  href=''  variant="dark"> <i class="fa-solid fa-link"></i> Visit</Button>
                   <Button  href='https://youtu.be/6bnFbz-uOkg?si=PfXp4obmmgviCc1I' style={{ backgroundColor:"#fcb045"}}><i class="fa-brands fa-youtube"></i> Watch</Button>
              

            </div>
            
          </Card.Body>
        </Card>
</div></Col>

</Row></Container>

</div>

    </div>
  )
}

export default Portfolio