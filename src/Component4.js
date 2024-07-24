import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Component4 extends Component {
    constructor(){
        super();
        console.log('Component4 CTOR');
   
    }
    componentDidMount() {
        console.log('Component4 componentDidMount')
    }
    componentWillUnmount() {
        console.log('Component4 componentWillUnmount')
    }
    componentDidUpdate() {
        console.log('Component4 componentDidUpdate')
    }

  render() {
    console.log('Component4 RNDR');
    return (
      <div>
         <h2>I am c 4</h2>
      </div>
    )
  }
}

export default Component4
