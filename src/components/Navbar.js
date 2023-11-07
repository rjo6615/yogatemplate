import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
              <Nav.Link href="#action3">About</Nav.Link>
            </Nav>
            <Button className='float-right' style={{ backgroundColor: '#a2d2ff', borderColor: '#a2d2ff', color: 'black' }}>Book Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
