import React from "react";
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
      .onSnapshot(function (chicken) {
        const descriptions = [];
        const sizes = [];
        chicken.forEach(function (doc) {
          descriptions.push(doc.data().description);
        });
        console.log("Descriptions: ", descriptions.join(", "));
        console.log("Sizes: ", sizes.join(", "));
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
