import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class RightNavigation extends React.Component {

	render() {
		return (
			<div className="rightNav" style={!this.props.open? {display:'none'}: {display: 'flex'}}>
				<nav className="navbar navbar-default sidebar" role="navigation">
				    <div className="container-fluid">
				    <div className="collapse navbar-collapse" >
				      <ul className="nav navbar-nav">
				        <li ><a href="#">Daniel<span style={{fontSize:'16px'}} className="pull-right hidden-md hidden-sm showopacity"></span></a></li>
				        <li ><a href="#">Jon <span style={{fontSize:'16px'}} className="pull-right hidden-md hidden-sm showopacity"></span></a></li>          
				        <li ><a href="#">Michael <span style={{fontSize:'16px'}} className="pull-right hidden-md hidden-sm showopacity"></span></a></li>        
				        <li ><a href="#">Dan<span style={{fontSize:'16px'}} className="pull-right hidden-md hidden-sm showopacity"></span></a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
		)
	}
}
export default RightNavigation