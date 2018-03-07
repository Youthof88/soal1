import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			active: 0
		}
	}
	changeName = name => this.setState({name})
  changeActive = active => this.setState({active})
  
	render = () =>
		<div id="app">
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<Link to='/Tab1' 
						onClick={() => this.changeActive(0)} 
						className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}
					>Login</Link>
				</li>
				<li className="nav-item">
					<Link to='/tab2'
						onClick={() => this.changeActive(1)} 
						className={`nav-link ${this.state.active === 1 ? 'active' : ''}`}
					>Welcome</Link>
				</li>
			</ul>
			<div id="display">
				<Route path='/' render={() => <Redirect to='/tab1'/>}/>
				<Route path='/tab1' render={() => <Tab1 changeActive={this.changeActive.bind(this)} changeName={this.changeName.bind(this)}/>}/>
				<Route path='/tab2' render={() => <Tab2 name={this.state.name}/>}/>				
			</div>
		</div>
}