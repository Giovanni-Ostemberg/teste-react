import React from 'react';

export default class BotaoGol extends React.Component{
	handleClick(event){
		//evitar pegar o comportamento padrão do componente
		event.preventDefault();
		this.props.marcarGol();
	}
	render(){
		return(
	<button onClick={this.handleClick.bind(this)}>GOL!</button>
			);
	}
}