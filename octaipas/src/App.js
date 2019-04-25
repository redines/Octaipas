import React, { Component } from 'react';
import DrinkList from './components/DrinkList_comp';
import Header from './components/header_comp';


class App extends Component {
  state = {
  drinks: [
    {
    id: "1",
    name: "vodka"
  },
  {
    id: "2",
    name: "burbon"
  }
]
}

  render() {
    return (
      <>
        <Header/>
        <DrinkList drinks={this.state.drinks}/>
      </>
    );
  }
}

export default App;
