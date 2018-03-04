var Block = React.createClass({

displayName: 'Block',


propTypes: {
	PhoneCat:React.PropTypes.arrayOf(
		React.PropTypes.shape({
		phoneModel: React.PropTypes.string.isRequired,
		code: React.PropTypes.number.isRequired,
		pic: React.PropTypes.string.isRequired,
		available: React.PropTypes.number.isRequired,
		price: React.PropTypes.number.isRequired,
		})
	)

},

render: function() {
	var outputArr=[];
	var arr = this.props.PhoneCat
	arr.forEach(function(item, i, arr) {
		//var some=arr[i];
		console.log(arr[i]);
		console.log(item); //right
		console.log(item[i]);
		var Arr=
		React.DOM.div({key:item.code,className:'PhoneType'},
			React.DOM.span({className:'PhoneModel'},item.phoneModel),
			React.DOM.span({className:'Descr'},item.descrip),
			React.DOM.img({className:'picPhone',src: item.pic}),
			React.DOM.span({className:'Available'},item.available),
			React.DOM.span({className:'Price'},item.price),
		);
		outputArr.push(Arr);
	});

	return React.DOM.div( {className:'CatalogBlock'}, 
		React.DOM.div( {className:'Table'}, outputArr ),
	);
},
});