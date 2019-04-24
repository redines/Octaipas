import React, { Component } from 'react';
import Divcom from './components/divcom';


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
    console.log(this.state.drinks);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            hej
          </p>
        </header>
        <Divcom drinks={this.state.drinks}/>
      </div>
    );
  }
}

export default App;
