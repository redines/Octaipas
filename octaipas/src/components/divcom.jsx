import React, { Component } from 'react';
import style from './divcomp.css';

class DivComp extends Component {
  render() {
    return this.props.drinks.map((drinks) => (
      <div className="DivComp">
        <p>{drinks.name}</p>
      </div>
    ));
  }
}

export default DivComp;