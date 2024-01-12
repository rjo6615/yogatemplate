import {Container, Nav, Navbar, Modal, Form, Button}from 'react-bootstrap';
import { useState } from 'react';

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="lg" style={{ width: '100%', zIndex: '1', position: 'fixed', backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', fontFamily: 'Agbalumo, cursive' }}>
        <Container fluid>
          <Navbar.Brand href="#">Yoga Template</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home" className="button-pop-out">Home</Nav.Link>
              <Nav.Link href="#services" className="button-pop-out">Services</Nav.Link>
              <Nav.Link href="#gallery" className="button-pop-out">Gallery</Nav.Link>
              <Nav.Link href="#about" className="button-pop-out">About</Nav.Link>
            </Nav>
            <Button onClick={handleShow} className='float-right button-pop-out' style={{ backgroundColor: '#a2d2ff', borderColor: '#a2d2ff', color: 'black' }}>Book Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <div style={{ backgroundImage: 'linear-gradient(to bottom right, #cdb4db, #bde0fe)', fontFamily: 'Agbalumo, cursive'}}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yoga Master"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="really@goodatyoga.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: '#a2d2ff', borderColor: '#a2d2ff', color: 'black' }} onClick={handleClose}>
            Send Message
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default NavbarComponent;
