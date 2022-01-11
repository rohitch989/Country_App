import React, { Component } from 'react'
import MainComponent from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store"
import TeamOmegaHeader from './components/common/TeamOmegaHeader';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <TeamOmegaHeader type="h1" text="Country App" className="App_header" />
          <MainComponent />
        </div>
      </Provider>
    )
  }
}

export default App
