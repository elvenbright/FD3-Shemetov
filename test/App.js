"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import Comp from './components/Comp';

let someArr=["red","orange","yellow","green","cyan","blue","purple"];

ReactDOM.render(
	<Comp data={someArr}/>
	,document.getElementById('container')
);