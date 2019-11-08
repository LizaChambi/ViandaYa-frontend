import React from 'react';
import './css/Content.css';
import './TableProviders.js';

import TableProviders from './TableProviders'

const ListaDatos = {
		providers:[
			{
				name: 'Liza Chambi',
				city: 'Luis Guillón',
				direction: 'Vidal 1015',
			},
			{
				name: 'Melody Orellana',
				city: 'Monte Grande',
				job: 'Boulevar 1020',
			},
			{
				name: 'Nahuel Benitez',
				city: 'Quilmes',
				job: 'Agote 2743',
			},
			{
				name: 'Elisa Nova',
				city: 'Avellaneda',
				job: 'Av. San Martín 2001',
			},
		],
	}

const ListProviders = props => {
		return (
		<div>
			{props.datosProveedores.providers.map(provider => <h2>Proveedor: {provider.name}</h2>)}
			<button onClick={() => {
				//ListaDatos.setState({providers: [props.datosProveedores.providers[0]] })}
				}}>Achicar</button>
		</div>
		)
}


class Datos extends React.Component 
{
  constructor(props)
  {
	  super(props);

		this.state = {
				providers: [
				{
          name: 'Liza Chambi',
          city: 'Luis Guillón',
					direction: 'Vidal 1015',
				},
				{
          name: 'Melody Orellana',
          city: 'Monte Grande',
					job: 'Boulevar 1020',
				},
				{
          name: 'Nahuel Benitez',
          city: 'Quilmes',
					job: 'Agote 2743',
				},
				{
          name: 'Elisa Nova',
          city: 'Avellaneda',
					job: 'Av. San Martín 2001',
				},
      ],

		}

	}

	render() {
		return <div>
		{this.state.providers.map(provider => <h1>Proveedor: {provider.name}</h1>)}
		<button onClick={() => this.setState({providers: [this.state.providers[0]]})}>achicar</button>
		</div>
	}

}


const Content = () => {
  return (
    <div className="Content">
      <h1> ¡Pedi YA tu delivery online! </h1>
      <p> Los restaurantes mejor calificados para tu deleite.</p>
      <ListProviders datosProveedores = {ListaDatos}/>
			<hr/>
			<Datos/>
		</div>
  );
}

export default Content;
