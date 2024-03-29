import React, { Component } from 'react';
import Header from './components/Header'
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
      </div>
    );
  }
}

export default App;
