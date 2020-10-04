import React from 'react';
import PageTable from './PageTable';
import PageLigaPrimerInggris from './PageLigaPrimerInggris';
import PageDivisiPrimera from './PageDivisiPrimera';
import PageBundesLiga from './PageBundesLiga';
import PageLigaSatu from './PageLigaSatu';
import {Tab, Tabs,Container, Col, Row} from 'react-bootstrap';

function PageContent(){
	return(
		<>
		<Container>
			<Row>
				<Col sm={12}>
					<Tabs defaultKeyActive="semuatransfer" id="controlled-tab-example">
						<Tab eventKey="semuatransfer" title="Semua Transfer">
				          <PageTable/>
				        </Tab>
				        <Tab eventKey="ligaprimeringgris" title="Liga Primer Inggris">
				          <PageLigaPrimerInggris/>
				        </Tab>
				        <Tab eventKey="divisiprimera" title="Divisi Primera">
				          <PageDivisiPrimera/>
				        </Tab>
				        <Tab eventKey="bundesliga" title="Bundes Liga">
				          <PageBundesLiga/>
				        </Tab>
				        <Tab eventKey="ligasatuindonesia" title="Liga 1 Indonesia">
				          <PageLigaSatu/>
				        </Tab>
				      </Tabs>
				</Col>
			</Row>
		</Container>
      </>
	)
}

export default PageContent;