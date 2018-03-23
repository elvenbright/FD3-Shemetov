import React from 'react';

class ColorFrame extends React.Component {
	render() {
		let output=<div style={{textAlign:"center"}}>{this.props.children}</div>;
		for(let i=0;i<this.props.colors.length;i++){
			output = <div style={{border:"dashed 2px "+this.props.colors[i],padding:"5px"}}>{output}</div>
		};
		return <div>{output}</div>;
	}
}

export default ColorFrame;