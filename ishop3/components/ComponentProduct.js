import React from 'react';

import './ComponentProduct.css';

class ComponentProduct extends React.Component {
	render(){
		var outputArr=this.props.CatalogData.map( item =>
			<div className= {item.isSelected?'PhoneTypeSelected':'PhoneType'} key={item.code} onClick={this.props.cbOnClickFunc}>
				<span className='InvisKey'>{item.code}</span>
				<span className='PhoneModel'>{item.phoneModel}</span>
				<span className='Descr'>{item.descrip}</span>
				<img className='picPhone' src={item.pic} />
				<span className='Available'>{'In Stock:'+'\n'+item.available}</span>
				<span className='Price'>{'Price:'+'\n'+item.price}</span>
				<input type='button' value='редактировать' className='EditBut'/>
				<input type='button' value='удалить' className='DeleteBut'/>
			</div>
	);
		return(
			<div className="Table">{outputArr}</div>
		);
	}
}

export default ComponentProduct;