import React from 'react';
import './css/TableProviders.css';

import Datos from './Content'

const TableHeader = () => 
{
    return (
    	<thead>
    	    <tr>
    			<th>Nombre</th>
    			<th>Localidad</th>
                <th>Direccion</th>
    		</tr>
    	</thead>
	)
}

const TableBody = props => 
{   
    const rows = props.map((row, index) => {
    	return (
    		<tr key={index}>
    		<td>{row.name}</td>
    		<td>{row.city}</td>
            <td>{row.direction}</td>
    	</tr>
    	)
    })
        
	return <tbody>{rows}</tbody>
}

const TableProviders = props => {
  return (
    <div className="TableProviders">
        <table>
		    <TableHeader />
		    <TableBody providerData = {props}/>
	    </table>
    </div>
  )
}

export default TableProviders;
