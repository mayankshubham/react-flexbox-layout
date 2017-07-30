import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './containers/App';


ReactDOM.render(
		<Router>
			<div>
				<Route exact path="/" render={() => (<App/>)} />
			</div>
		</Router>,
	document.getElementById('container')
)
