import React from 'react';
import {Panel} from 'react-bootstrap';

import data from '../../resources/data.json'

class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: data,
			loadData: false
		}
	}
	load = () => {
		//Simulate server timer
		setTimeout(() => {
			var dataObj = [...this.state.data, ...data];
			this.setState({data: dataObj})
		}, 300)
	}
	checkScroll = (e) => {
		console.log((e.target.scrollTop+e.target.offsetHeight)/e.target.scrollHeight)
        if((e.target.scrollTop+e.target.offsetHeight)/e.target.scrollHeight>=.75){
            if(!this.state.loadData) {
            	this.setState({loadData: true});
            	this.load();
            }
        }
        else {
        	if(this.state.loadData) {
        		this.setState({loadData: false});
        	}
        }
	}
	render() {
		return (
			<div className="content" onScroll={this.checkScroll}>
				<div className="contentpanels">
					{this.state.data.map((data, index) => {
						return (
							<Panel key={index}>
								{data}
							</Panel>
						)
					})}
				</div>
			</div>
		)
	}
}
export default Content;