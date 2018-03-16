var ComponentProduct = React.createClass({
	render: function() {
	var outputArr=this.props.CatalogData.map( item =>
		React.DOM.div({key:item.code,className: item.isSelected?'PhoneTypeSelected':'PhoneType',onClick: this.props.cbOnClickFunc},
				React.DOM.span({className:'InvisKey'},item.code),
				React.DOM.span({className:'PhoneModel'},item.phoneModel),
				React.DOM.span({className:'Descr'},item.descrip),
				React.DOM.img({className:'picPhone',src: item.pic}),
				React.DOM.span({className:'Available'},'In Stock:'+'\n'+item.available),
				React.DOM.span({className:'Price'},'Price:'+'\n'+item.price),
				React.DOM.input( {type:'button',value:'редактировать',className:'EditBut'}),
				React.DOM.input( {type:'button',className:'DeleteBut',value:'удалить'}),
		)
	);
		return React.DOM.div( {className:'Table'}, outputArr
		);
	},
});