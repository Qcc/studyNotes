import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
         <h3>{new Date().toLocaleDateString()}</h3>
      </div>
    );
  }
}

export default App;
