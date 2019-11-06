import React, { Component } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import States from './components/States.js';

class App extends Component {
  render() {
      return (
        <>
          <Header />

          <States />

          <Footer />
        </>
      );
  }
}

export default App;