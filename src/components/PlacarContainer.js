import React from 'react';
import Time from './Time';
import Partida from './Partida'

export default class PlacarContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			gols_casa: 0,
			gols_visitante: 0,
		}
	}

	marcarGolCasa(){
		this.setState({
			gols_casa: this.state.gols_casa + 1,
		});
	}
	marcarGolVisitante(){
		this.setState({
			gols_visitante: this.state.gols_visitante + 1,
		});
		}

	render(){
		const { partida, casa, visitante } = this.props; //Pega os índices partida, casa e visitante contidos em props e os transforma em variáveis
		const estilo = {float:"left", "marginRight":"20px"};
		return(
		<div>
			<div style={estilo} >
			<h3>Casa</h3>
				<Time {...casa} /*nome={this.props.casa.nome}*/ gols={this.state.gols_casa} marcarGol={this.marcarGolCasa.bind(this)}/>
			</div>
			<div style={estilo}>
				<Partida {...partida} /*estadio={this.props.partida.estadio} data={this.props.partida.data} horario={this.props.partida.horario}*/ />
			</div>
			<div style={estilo}>
			<h3>Visitante</h3>
				<Time {...visitante} /*nome={this.props.visitante.nome}*/ gols={this.state.gols_visitante} marcarGol={this.marcarGolVisitante.bind(this)} />
			</div>
		</div>
		);
	}
}

PlacarContainer.propTypes = {
	clima: React.propTypes.string,
	tempo: React.propTypes.number.isRequired,
};

//Declara valores padrões para variáveis que não receberam nenhuma propriedade do usuário
PlacarContainer.defaultProps = {
	clima: 'Ensolarado',
};

//