import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Component3 from './Component3';

export class Component2 extends Component {
    counter=0;
    constructor(){
        super();
        console.log('Component2 CTOR');
        this.state={
            counter:this.counter
        }
    }

    componentDidMount() {
        console.log('Component2 componentDidMount')
    }
    componentWillUnmount() {
        console.log('Component2 componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('Component2 componentDidUpdate')
    }
    handleOnClick = () => {
        console.log('Component2 clicked- and Props are getting changed for C3')
        this.setState({counter:this.state.counter+1});
      
    }


    render() {
        console.log('Component2 RNDR');
        return (
            <div>
                <h2>I am c 2</h2>
                <div className="container">
                    <button onClick={this.handleOnClick}>Component2 update</button>
                </div>
                { this.state.counter>=2 && <Component3 counter={this.state.counter}/>}
            </div>
        )
    }
}

export default Component2
