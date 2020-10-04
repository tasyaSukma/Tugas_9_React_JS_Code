import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import PageNavbar from './page/PageNavbar';
import PageContent from './page/PageContent';
import PageFooter from './page/PageFooter';
import {Spinner, Container, Col, Row} from 'react-bootstrap';

function App() {
  


  return (
    <div>
      <PageNavbar/>
      <br/>
      <br/>
      <Container>
      <Row>
      <Col sm={11}>
      <h4>Rumor Transfer Pemain</h4>
      </Col>
      <Col sm={1}>
      <Spinner animation="border" variant="success" size="md" />
      <Spinner animation="grow" variant="success" size="sm" />
      </Col>
      </Row>
      </Container>
      <br/>
      <PageContent/>
      <PageFooter/>
    </div>
  );
}

export default App;
