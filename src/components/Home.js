import React from "react";
import {Card, Container, Row, Carousel}from 'react-bootstrap';

function Home() {
  return (
    <div>
    <div style={{ height: '1000px', backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', paddingTop: '100px' }}>
      <div className="d-flex justify-content-center">
        <section className="text-center text-lg-start">
          <div className="card mb-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderColor: 'rgba(0, 0, 0, 0.0)' }}>
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <img src="https://pngimg.com/d/yoga_PNG13.png" alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <h1 style={{ fontFamily: 'Agbalumo, cursive' }}>We do the Yoga stuff</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>    
      <Container>
      <Row className="d-flex flex-wrap justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none' }}>
            <Card.Header className="image-hover" style={{ width: '25rem', height: '25rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Yoga</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none' }}>
            <Card.Header className="image-hover" style={{ width: '25rem', height: '25rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://caffeyoga.com/wp-content/uploads/2015/03/beach-yoga1.jpg)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>More Yoga</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none' }}>
            <Card.Header className="image-hover" style={{ width: '25rem', height: '25rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Most Yoga</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
</div>
<section class="background-radial-gradient overflow-hidden">

  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
          The best offer <br />
          <span style={{color: "hsl(218, 81%, 75%)"}}>for your business</span>
        </h1>
        <p class="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body">
          <Carousel>
      <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '900px', height: '410px'}}
        className="d-block w-100"
        src="https://caffeyoga.com/wp-content/uploads/2015/03/beach-yoga1.jpg"
        alt="First slide"
      />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '900px', height: '410px'}}
        className="d-block w-100"
        src="https://caffeyoga.com/wp-content/uploads/2015/03/beach-yoga1.jpg"
        alt="First slide"
      />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '900px', height: '410px'}}
        className="d-block w-100"
        src="https://caffeyoga.com/wp-content/uploads/2015/03/beach-yoga1.jpg"
        alt="First slide"
      />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>    
  );
}

export default Home;
