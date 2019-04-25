import React, { Component } from 'react';
import DrinkListItem from './DrinkListItem_comp';

class DivComp extends Component {
  render() {
    return this.props.drinks.map((drinks) =>(
      <div className='center'>
        <DrinkListItem key={drinks.id} drinks={drinks} />
      </div>
    ));
  }
}

export default DivComp;