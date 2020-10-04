import React from 'react';
import {Table, ProgressBar, Pagination} from 'react-bootstrap';
import listdata from './../listdata/listdata';
function PageTable(){
	return(
		<>
		<Table size="sm">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>Nama Pemain</th>
		      <th>Tim</th>
		      <th>Transfer</th>
		      <th>Proses Transfer</th>
		    </tr>
		  </thead>
		  <tbody>
		    {listdata.map((data,i) => {
		    	return(
		    		<tr key={i}>
		    		<td>{i+1}</td>
		    		<td>{data.nm}</td>
		    		<td>{data.tim}</td>
		    		<td>{data.transfer}</td>
		    		<td><ProgressBar now={data.proses} label={`${data.proses}%`}/></td>
		    		</tr>		    		
		    	)
		    })}
		  </tbody>
		</Table>
		<Pagination>
	        <Pagination.First />
	        <Pagination.Prev />
	        <Pagination.Item>{1}</Pagination.Item>
	        <Pagination.Ellipsis />

	        <Pagination.Item>{10}</Pagination.Item>
	        <Pagination.Item>{11}</Pagination.Item>
	        <Pagination.Item active>{12}</Pagination.Item>
	        <Pagination.Item>{13}</Pagination.Item>
	        <Pagination.Item disabled>{14}</Pagination.Item>

	        <Pagination.Ellipsis />
	        <Pagination.Item>{20}</Pagination.Item>
	        <Pagination.Next />
	        <Pagination.Last />
      	</Pagination>
      	</>

	)
}

export default PageTable;