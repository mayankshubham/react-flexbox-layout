import React, { Component } from 'react';
import Navbar from './navbar';
import LeftNavigation from './leftNavigation';
import RightNavigation from './rightNavigation';
import Content from './content';

import styles from '../../css/App.css';

class App extends Component {
  state = {
    leftNav: true,
    rightNav: true,
  }
  render() {
    return (
      <div className="container">
        <button className="hamburger" onClick={()=> this.setState((prevState) => ({rightNav: !prevState.rightNav}))}>&#9776;</button>
        <button className="hamburger left" onClick={()=> this.setState((prevState) => ({leftNav: !prevState.leftNav}))}>&#9776;</button>
        <Navbar/>
        <div className="app">
            <LeftNavigation open={this.state.leftNav}/>
            <Content/>
            <RightNavigation open={this.state.rightNav}/>
        </div>
      </div>
    );
  }
}

export default App;
