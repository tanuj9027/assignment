import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'

// Entry point for UI

class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
        <br/>
      <Body/>
      </div>
    );
  }
}

export default App;
