import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class LeftNavigation extends React.Component {

	render() {
		return (
			<div className="leftNav" style={!this.props.open? {display:'none'}: {display: 'flex'}}>
				<nav className="navbar navbar-default sidebar" role="navigation">
				    <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>      
				    </div>
				    <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">Home<span style={{fontSize:'16px'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li>
				                
				        <li ><a href="#">Contacts<span style={{fontSize:'16px'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-th-list"></span></a></li>        
				        <li ><a href="#">Tags<span style={{fontSize:'16px'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-tags"></span></a></li>
				      	<li className="dropdown">
				          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Profile<span className="caret"></span><span style={{fontSize:'16px'}} className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a>
				          <ul className="dropdown-menu forAnimate" role="menu">
				            <li><a href="#">Settings</a></li>
				            <li><a href="#">SignOut</a></li>
				          </ul>
				        </li>  	
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
		)
	}
}
export default LeftNavigation