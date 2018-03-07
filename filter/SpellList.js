var Block = React.createClass({
propTypes: {
	SpLst:React.PropTypes.arrayOf(
		React.PropTypes.shape({
			spell: React.PropTypes.string.isRequired,
			code: React.PropTypes.number.isRequired,
		})
	)
},
getInitialState: function() {
	return {
		sorted: false,
		contain: "",
		words: this.props.words,
	};
},
changeCheckBox: function (EO){
	this.setState( { sorted: EO.target.checked }, this.processWords );
},
changeInputText: function (EO){
	this.setState( { contain: EO.target.value }, this.processWords );
},
processWords: function (){
	this.state.words=JSON.parse(JSON.stringify(this.props.words));
	if(this.state.sorted){
		this.state.words.sort(function(a,b){
				if(a.spell > b.spell){ return 1}
				if(a.spell < b.spell){ return -1}
				return 0;
		});
		this.setState( { words: this.state.words} );//два раза не перезаписывать
	}
	else{
		this.setState( { words: this.props.words} );//два раза не перезаписывать
	}
	if(this.state.contain==""){
	}
	else{
		var n = JSON.parse(JSON.stringify(this.state.words)); //n - копия массива
		var a = this.state.contain;
		var outputArr=[];
		n.forEach(function(item, i, arr) {
			for (b=0;a.length>b;b++){
				if(a.substr(0,a.length)==arr[i].spell.substr(0,a.length)){
					var alrdyInArr;
					outputArr.forEach(function(item2, i2, arr2){
						if(JSON.stringify(item)==JSON.stringify(item2)){
							alrdyInArr=true;
						}
					});
					if(!alrdyInArr)outputArr.push(item);
				}
				else  {continue;}
			}
		});
		
		this.setState( { words: outputArr} );
	}
},
render: function() {
	var outputArr=[];
	var arr = this.state.words;
	arr.forEach(function(item, i, arr) {
		var Arr=React.DOM.option({key:item.code},item.spell);
	outputArr.push(Arr)
	});
	return React.DOM.div( {className:'SpellBlock'},
		React.DOM.input( {type:'checkbox',className:'checkBox',defaultChecked: this.state.sorted, onChange: this.changeCheckBox}),
		React.DOM.input( {type:'text',className:'inputText',onChange: this.changeInputText,value: this.state.contain}),
		React.DOM.select( {size:4,className:'SpellTab'},outputArr),
		);
},
});