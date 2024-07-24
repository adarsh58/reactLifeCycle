import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Component4 from './Component4'

export class Component3 extends Component {

    constructor(){
        super();
        console.log('Component3 CTOR');
   
    }

    componentDidMount() {
        console.log('Component3 componentDidMount')
    }
    componentWillUnmount() {
        console.log('Component3 componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('Component3 componentDidUpdate')
    }
  render() {
    console.log('Component3 RNDR');
    return (
      <div>
         <h2>I am c 3 and You are passing props from C2 -{this.props.counter}</h2>
         <Component4 />
      </div>
    )
  }
}

export default Component3
