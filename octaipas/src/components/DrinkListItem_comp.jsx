import React, { Component } from 'react';

class DivComp extends Component {
  render() {
    return (
        <p>{this.props.drinks.name}</p>
    );
  }
}

export default DivComp;