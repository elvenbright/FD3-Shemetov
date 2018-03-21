"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import ComponentShop from './components/ComponentShop';

let PhonesCatalog=require('./PhoneCatJson.json');

ReactDOM.render(
	<ComponentShop
	PhoneCat={PhonesCatalog}
	/>
	,document.getElementById('container') 
);