import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends React.Component {

	render() {
		return (
			<div className="header">
				<Navbar fixedTop className="topNavbar" >
					<Navbar.Header>
						
						<Navbar.Brand>
						<div style={{display: 'flex' , marginLeft: '25px'}}>
							<p className="logoHeading">Navya<b>Networks</b></p>
						</div>
						</Navbar.Brand>					
					</Navbar.Header>

					
				</Navbar>
			</div>
		)
	}
}
export default Navigation