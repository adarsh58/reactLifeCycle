import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Component2 from './Component2';

export class Component1 extends Component {



    counter=0;
    constructor(){
        super();
        console.log('Component1 CTOR');
        this.state={
            counter:this.counter
        }
    }

    componentDidMount()
    {
        console.log('Component1 componentDidMount')
    }
    componentWillUnmount()
    {
        console.log('Component1 componentWillUnmount')
    }
    componentDidUpdate()
    {
        console.log('Component1 componentDidUpdate')
    }

    handleOnClick = () => {
        console.log('Component1 clicked')
        this.setState({counter:this.state.counter+1});
    
    }

    render() {
        console.log('Component1 RNDR'+ this.state.counter);
        return (
            <div className="container">
                <h2>I am c 1</h2>
                <div className="container">
                    <button onClick={this.handleOnClick}>Component1 update</button>
                </div>
               { this.state.counter>=2 && <Component2/>}
            </div>
        )
    }
}

export default Component1
