var ComponentShop = React.createClass({
	getInitialState: function() {
		return {
			CatalogToRender: this.props.PhoneCat,
			isVal: false, 
			isBut: false,
			isInpDis: false,
			butVal1: '',
			butVal2: '',
			
			delMenu: false, 
			delName: '',
			numToDel: '',
			
			numOfArrTo: '',
			markTel: '',
			descTel: '',
			codeTel: '',
			urlTel: '',
			instTel: '',
			priceTel: '',
			
			markRegEx: /^[а-яА-ЯёЁa-zA-Z0-9]+\s[а-яА-ЯёЁa-zA-Z0-9]{1,12}$/,
			descRegEx: /^[а-яА-ЯёЁa-zA-Z0-9\s\W]{1,150}$/,
			codeRegEx: /^[0-9]{1,3}$/,
			urlRegEx: /(\.(jpg|jpeg|png|gif)+$)/,
			instRegEx: /^[0-9]{1,4}$/,
			priceRegEx: /^[0-9]{1,4}$/,
			
			markRegExStatus: true,
			descRegExStatus: true,
			codeRegExStatus: true,
			urlRegExStatus: true,
			instRegExStatus: true,
			priceRegExStatus: true,
			
			markRegExTxt: 'Должен состоять из 2 слов не более 12 символов каждое.',
			descRegExTxt: 'Не более 150 символов',
			codeRegExTxt: 'Не более 3 цифр, уникальный номер',
			urlRegExTxt: 'Должен оканчиваться на jpg, jpeg, png, gif',
			instRegExTxt: 'Не более 4 цифр',
			priceRegExTxt: 'Не более 4 цифр',
		};
	},
	changeCatalogUpdater:function(inp){
		if(inp=='Add'){
			if(this.state.markRegExStatus&&this.state.descRegExStatus&&this.state.codeRegExStatus&&this.state.urlRegExStatus&&this.state.instRegExStatus&&this.state.priceRegExStatus){
				var ElementToPush={};
				ElementToPush['phoneModel']=this.state.markTel;
				ElementToPush['code']=this.state.codeTel;
				ElementToPush['descrip']=this.state.descTel;
				ElementToPush['pic']=this.state.urlTel;
				ElementToPush['available']=this.state.instTel;
				ElementToPush['price']=this.state.priceTel;
				this.state.CatalogToRender.push(ElementToPush);
				this.setState({CatalogToRender:this.state.CatalogToRender});
				this.setState({isVal: false});
				this.changeStyle();
			}
		}
		if(inp=='Edit'){
			if(this.state.markRegExStatus&&this.state.descRegExStatus&&this.state.codeRegExStatus&&this.state.urlRegExStatus&&this.state.instRegExStatus&&this.state.priceRegExStatus){
				this.state.CatalogToRender[this.state.numOfArrTo].phoneModel=this.state.markTel;
				this.state.CatalogToRender[this.state.numOfArrTo].descrip=this.state.descTel;
				this.state.CatalogToRender[this.state.numOfArrTo].code=this.state.codeTel;
				this.state.CatalogToRender[this.state.numOfArrTo].pic=this.state.urlTel;
				this.state.CatalogToRender[this.state.numOfArrTo].available=this.state.instTel;
				this.state.CatalogToRender[this.state.numOfArrTo].price=this.state.priceTel;
				this.setState({CatalogToRender:this.state.CatalogToRender});
				this.setState({isVal: false});
				this.changeStyle();
			}
		}
	},
	validCheck:function(inp,s){
		var a,b,c,d,e,f;
		if(this.state.markRegEx.test(this.state.markTel)){
			this.setState({ markRegExStatus: true });
			a=true;
		}
		else{
			this.setState({ markRegExStatus: false });
			a=false;
		}
		if(this.state.descRegEx.test(this.state.descTel)){
			this.setState({ descRegExStatus: true });
			b=true;
		}
		else{
			this.setState({ descRegExStatus: false });
			b=false;
		}
		if(this.state.codeRegEx.test(this.state.codeTel)){
			var t=0;
			this.state.CatalogToRender.forEach( p => {
				if(p.code!=this.state.codeTel){
					t++;
				}
			})
			if(t==this.state.CatalogToRender.length){
				this.setState({ codeRegExStatus: true });
				c=true;
			}
			else if(inp=='Edit'&&this.state.CatalogToRender[this.state.numOfArrTo].code==this.state.codeTel){
				this.setState({ codeRegExStatus: true });
				c=true;
			}
			else{
				this.setState({ codeRegExStatus: false });
				c=false;
			}
		}
		else{
			this.setState({ codeRegExStatus: false });
			c=false;
		}
		if(this.state.urlRegEx.test(this.state.urlTel)){
			this.setState({ urlRegExStatus: true });
			d=true;
		}
		else{
			this.setState({ urlRegExStatus: false });
			d=false;
		}
		if(this.state.instRegEx.test(this.state.instTel)){
			this.setState({ instRegExStatus: true });
			e=true;
		}
		else{
			this.setState({ instRegExStatus: false });
			e=false;
		}
		if(this.state.priceRegEx.test(this.state.priceTel)){
			this.setState({ priceRegExStatus: true });
			f=true;
		}
		else{
			this.setState({ priceRegExStatus: false });
			f=false;
		}
		if(a&&b&&c&&d&&e&&f){
			this.setState({}, () => this.changeCatalogUpdater(inp));
		}
	},
	editFunc:function(inp){
		if(inp.target.value=='отмена'){
			this.setState({isVal:false});
			this.changeStyle();
		}
		else if(inp.target.value=='сохранить'){
			this.validCheck('Edit');
		}
		else if(inp.target.value=='добавить'){
			this.validCheck('Add',inp);
		}
	},
	changeStyle: function(inp){
		if(inp==undefined){
			for(var a=0;a<this.state.CatalogToRender.length;a++){
				this.state.CatalogToRender[a].isSelected=false;
			}
		}
		else if(inp.target.type==undefined){
			for(var a=0;a<this.state.CatalogToRender.length;a++){
				if(this.state.CatalogToRender[a].code==inp.currentTarget.firstChild.textContent){
					if(this.state.CatalogToRender[a].isSelected==true){
						this.state.CatalogToRender[a].isSelected=false;
					}
					else{
						this.state.CatalogToRender[a].isSelected=true;
					}
				}
				else{
					this.state.CatalogToRender[a].isSelected=false;
				}
			};
		}
		else if(inp.target.type=='button'){
			if(inp.target.className=='DeleteBut'||inp.target.className=='EditBut'){
				for(var a=0;a<this.state.CatalogToRender.length;a++){
					if(this.state.CatalogToRender[a].code==inp.currentTarget.firstChild.textContent){
						this.state.CatalogToRender[a].isSelected=true;
					}
					else{
						this.state.CatalogToRender[a].isSelected=false;
					}
				}
			}
			else if(inp.target.className=='delbut2'){
				for(var a=0;a<this.state.CatalogToRender.length;a++){
					this.state.CatalogToRender[a].isSelected=false;
				}
			}
		}
	},
	upDateForm: function(inp){
		for(var a=0;a<this.state.CatalogToRender.length;a++){
			if(this.state.CatalogToRender[a].code==inp.currentTarget.firstChild.textContent){
				this.setState({markTel:this.state.CatalogToRender[a].phoneModel});
				this.setState({descTel:this.state.CatalogToRender[a].descrip});
				this.setState({codeTel:this.state.CatalogToRender[a].code});
				this.setState({urlTel:this.state.CatalogToRender[a].pic});
				this.setState({instTel:this.state.CatalogToRender[a].available});
				this.setState({priceTel:this.state.CatalogToRender[a].price});
			}
		};
	},
	formChanges: function(EO){
		if(EO.currentTarget.className=='markEditBar'){
			this.setState( {markTel:EO.currentTarget.value} );
		}
		else if (EO.currentTarget.className=='discrptEditBar'){
			this.setState( {descTel:EO.currentTarget.value} );
		}
		else if (EO.currentTarget.className=='codeBar'){
			this.setState( {codeTel:EO.currentTarget.value} );
		}
		else if (EO.currentTarget.className=='imgURLEditBar'){
			this.setState( {urlTel:EO.currentTarget.value} );
		}
		else if (EO.currentTarget.className=='inStockEditBar'){
			this.setState( {instTel:EO.currentTarget.value} );
		}
		else if (EO.currentTarget.className=='priceEditBar'){
			this.setState( {priceTel:EO.currentTarget.value} );
		}
	},
	OnClickFunc: function(inp){
		this.setState({ markRegExStatus: true, descRegExStatus: true,codeRegExStatus: true,urlRegExStatus: true,instRegExStatus: true,priceRegExStatus: true, });
		if(inp.target.value==undefined){
			this.upDateForm(inp);
			this.changeStyle(inp);
			this.setState( {isInpDis: true} );
			this.setState( {isBut: false} );
			this.setState( {isVal: true,} );
			for(var a=0;a<this.state.CatalogToRender.length;a++){
				if(this.state.CatalogToRender[a].code==inp.currentTarget.firstChild.textContent){
					if(this.state.CatalogToRender[a].isSelected==false){
						this.setState( {isVal: false,} );
					}
				}
			}
		}
		else if(inp.target.value=='редактировать'){
			this.changeStyle(inp);
			this.setState( {isInpDis: false} );
			this.setState( {isBut: true} );
			this.setState( {isVal: true,} );
			this.setState( {butVal1: 'сохранить'} );
			this.setState( {butVal2: 'отмена'} );
			for(var a=0;a<this.state.CatalogToRender.length;a++){
				if(this.state.CatalogToRender[a].code==inp.currentTarget.firstChild.textContent){
					this.setState( {markTel: this.state.CatalogToRender[a].phoneModel} );
					this.setState( {descTel: this.state.CatalogToRender[a].descrip} );
					this.setState( {codeTel: this.state.CatalogToRender[a].code} );
					this.setState( {urlTel: this.state.CatalogToRender[a].pic} );
					this.setState( {instTel: this.state.CatalogToRender[a].available} );
					this.setState( {priceTel: this.state.CatalogToRender[a].price} );
					this.setState( {numOfArrTo: a} );
				}
			}
		}
		else if(inp.target.value=='удалить'){
			this.deleteFunc(inp);
			for(var a=0;a<this.state.CatalogToRender.length;a++){
				if(this.state.CatalogToRender[a].code==inp.currentTarget.firstChild.textContent){
					this.setState( {delName: 'Are you sure to delete'+'\n'+this.state.CatalogToRender[a].phoneModel+'?'} );
				}
			}
		}
		else{
			this.setState({isVal: true});
			this.setState({isBut: true});
			this.setState({isInpDis: false});
			this.setState({butVal1:'добавить'});
			this.setState({butVal2:'отмена'});
			this.setState({markTel: ''});
			this.setState({descTel: ''});
			this.setState({codeTel: ''});
			this.setState({urlTel: ''});
			this.setState({instTel: ''});
			this.setState({priceTel: ''});
			this.changeStyle();
		}
	},
	deleteFunc: function(inp) {
		this.changeStyle(inp);
		this.setState( {delMenu: true} );
		this.setState( {isVal: false} );
		if(inp.target.value=='удалить'){
			this.setState({numToDel: inp.currentTarget.firstChild.textContent});
		}
		if(inp.currentTarget.value=='подтвердить'){
			var counter=0;
			this.state.CatalogToRender.forEach( p => {
				p.cnt=counter;
				if(p.code==this.state.numToDel){
					this.state.CatalogToRender.splice(counter,1);
				}
				counter++;
			});
			this.setState({CatalogToRender:this.state.CatalogToRender});
			this.setState({isVal: false});
			this.setState( {delMenu: false} );
		}
		else if(inp.currentTarget.value=='отмена'){
			this.setState( {delMenu: false} );
			this.setState({isVal: false});
			this.changeStyle();
		}
	},
	render: function() {
		return React.DOM.div( {className:'CatalogBlock'},
			this.state.delMenu?React.DOM.div( {className:'CoverDel'},
				React.DOM.div( {className:'DeleteMenu'},
					React.DOM.div( {className:'delName'},this.state.delName),
					React.DOM.input( {type:'button',className:'delbut1',value:'подтвердить',onClick:this.deleteFunc}),
					React.DOM.input( {type:'button',className:'delbut2',value:'отмена',onClick:this.deleteFunc})),
			):null,
			React.createElement(ComponentProduct, {CatalogData:this.state.CatalogToRender,cbOnClickFunc: this.OnClickFunc}),
			React.DOM.div( {className:'EditFrame'},
				this.state.isVal?React.DOM.div( {className:'EditTable'},
					React.DOM.input( {type:'text',className:'markEditBar',    value:this.state.markTel  ,disabled:this.state.isInpDis,onChange:this.formChanges}),
					React.DOM.input( {type:'text',className:'discrptEditBar', value:this.state.descTel  ,disabled:this.state.isInpDis,onChange:this.formChanges}),
					React.DOM.input( {type:'text',className:'codeBar',        value:this.state.codeTel   ,disabled:this.state.isInpDis,onChange:this.formChanges}),
					React.DOM.input( {type:'text',className:'imgURLEditBar',  value:this.state.urlTel    ,disabled:this.state.isInpDis,onChange:this.formChanges}),
					React.DOM.input( {type:'text',className:'inStockEditBar', value:this.state.instTel   ,disabled:this.state.isInpDis,onChange:this.formChanges}),
					React.DOM.input( {type:'text',className:'priceEditBar',   value:this.state.priceTel  ,disabled:this.state.isInpDis,onChange:this.formChanges}),
					this.state.isBut?React.DOM.input( {type:'button',className:'but1',value:this.state.butVal1,onClick:this.editFunc}):null,
					this.state.isBut?React.DOM.input( {type:'button',className:'but2',value:this.state.butVal2,onClick:this.editFunc}):null,
					
					this.state.markRegExStatus?null:React.DOM.span({className:'markRegEx'},this.state.markRegExTxt),
					this.state.descRegExStatus?null:React.DOM.span({className:'descRegEx'},this.state.descRegExTxt),
					this.state.codeRegExStatus?null:React.DOM.span({className:'codeRegEx'},this.state.codeRegExTxt),
					this.state.urlRegExStatus?null:React.DOM.span({className:'urlRegEx'},this.state.urlRegExTxt),
					this.state.instRegExStatus?null:React.DOM.span({className:'instRegEx'},this.state.instRegExTxt),
					this.state.priceRegExStatus?null:React.DOM.span({className:'priceRegEx'},this.state.priceRegExTxt),
				):null,
			),
			React.DOM.input( {type:'button',value:'новый',className:'AddNew',onClick: this.OnClickFunc} ),
		);
	},
});
