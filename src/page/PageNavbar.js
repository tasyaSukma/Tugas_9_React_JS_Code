import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Breadcrumb, Container, Col, Row} from 'react-bootstrap';

function PageNavbar(){
	return(
		<>
		  <Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#berita">Berita</Nav.Link>
		      <Nav.Link href="#livescore">Live Score</Nav.Link>
		      <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
		        <NavDropdown.Item href="#pialaliga/piala">Piala</NavDropdown.Item>
		        <NavDropdown.Item href="#pialaliga/liga"> Liga</NavDropdown.Item>
		      </NavDropdown>
		      <Nav.Link href="#transferpemain">Transfer Pemain</Nav.Link>
		      <Nav.Link href="#tim">Tim</Nav.Link>
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-info">Search</Button>
		    </Form>
		  </Navbar>

		  <Container>
		  <Row>
		  <Col sm={8}></Col>
		  <Col>
		  <Breadcrumb>
			<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
			<Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
			<Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
		  </Breadcrumb>
		  </Col>
		  </Row>
		  </Container>
		</>
	)
}

export default PageNavbar;