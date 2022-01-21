import React, { Component } from 'react'
import MainComponent from './components/MainComponent';
import './App.css';
import TeamOmegaHeader from './components/common/TeamOmegaHeader';
class App extends Component {
  render() {
    return (
      <div className='App' data-test="App_Component">
        <TeamOmegaHeader type="h1" text="Country App" className="App_header" />
        <MainComponent />
      </div>
    )
  }
}

export default App
