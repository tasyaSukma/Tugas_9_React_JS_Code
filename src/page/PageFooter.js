import React, {Component} from 'react';
import {Popover, 
		OverlayTrigger, 
		Button,
		Container,
		Row,
		Col} from 'react-bootstrap';



	 const popover1 = (
	    <Popover id="popover-basic">
	      <Popover.Title as="h3">Informasi Website</Popover.Title>
	      <Popover.Content>
	        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
	      </Popover.Content>
	    </Popover>
	 )

	  const popover2 = (
	    <Popover id="popover-basic">
	      <Popover.Title as="h3">Website</Popover.Title>
	      <Popover.Content>
	        Website ini berisi tentang berita olahraga.
	      </Popover.Content>
	    </Popover>
	  )

	  const ButtonSatu = () => (
	  	<OverlayTrigger trigger="click" placement="right" overlay={popover1}>
          <Button variant="success">Informasi</Button>
      	</OverlayTrigger>
	  )

	  const ButtonDua = () => (
	  	<OverlayTrigger trigger="click" placement="right" overlay={popover2}>
          <Button variant="success">Versi Website</Button>
      	</OverlayTrigger>
	  )

class PageFooter extends Component{
	render(){
		return(
			<>
			<Container>
				<Row>
					<Col sm={2.5}>
						<ButtonSatu/>
					</Col>
					<Col sm={0.9}></Col>
					<Col sm={2.5}>
						<ButtonDua/>
					</Col>	
				</Row>
			</Container>
			</>
		)
	}
}

export default PageFooter;