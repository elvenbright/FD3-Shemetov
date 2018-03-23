"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import ColorFrame from './components/ColorFrame';

let colors=require('./ColorsJson.json');

ReactDOM.render(
	<ColorFrame colors={colors}>
		<div>Радуга</div>
	</ColorFrame>
	,document.getElementById('container')
);