import React, { Component } from "react";
import style from "./style/index.scss";
import firebase from "./database/firebase.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: [],
    };
  }

  componentDidMount() {
    console.log(firebase.firestore().collection("paper"));
    console.log(firebase.database().ref("paper"));
    firebase
      .firestore()
      .collection("paper")
      .onSnapshot((snapshot) => {
        debugger;
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Home</p>
          <p>Paper</p>
        </header>
      </div>
    );
  }
}

export default App;
//export default App;
