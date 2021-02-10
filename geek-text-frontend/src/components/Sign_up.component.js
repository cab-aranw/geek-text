import React, { Component } from 'react';

export default class Sign_up extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      ID: '',
      password: '',
      name: '',
      // etc.
    }
  }

  render () {
    return (
      <div>
        <p>Welcome to the Sign up!</p>
      </div>
    );
  }
}