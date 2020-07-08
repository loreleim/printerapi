import React, { useEffect, useState } from "react";
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
    firebase
      .firestore()
      .collection("paper")
      .onSnapshot((chicken) => {
        const firebasePaper = chicken.docs.map((doc) => ({
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Home</p>
          <p>Paper</p>
            <div key={paper.id}>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
//export default App;
