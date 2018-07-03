import React, { Component } from 'react';
import Parse from 'parse';
import Home from "./components/home";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // TODO don't forget to add your app and js ids
    Parse.initialize("YOUR-APP-ID", "YOUR-JS-KEY");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Back4App Tutorial</h1>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
