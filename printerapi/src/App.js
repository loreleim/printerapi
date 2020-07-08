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
    this.setState({ paper: 2 });
    firebase
      .firestore()
      .collection("paper")
      .onSnapshot((chicken) => {
        const data = chicken.docs.map((doc) => doc.data());
        console.log(data);
        const descriptions = [];
        const sizes = [];
        const names = [];
        chicken.forEach(function (doc) {
          names.push(doc.id);
          descriptions.push(doc.data().description);
          sizes.push(doc.data().size);
          console.log(doc.id, "has the content: ", doc.data());
        });
        console.log("Names: ", names.join(", "));
        console.log("Descriptions: ", descriptions.join(", "));
        console.log("Sizes: ", sizes.join(", "));
        this.setState({ paper: 3 });
      });
  }

  render() {
    //const fast = this.state;
    console.log("this is the yeah: " + this.state.yeah);
    return (
      <div className="App">
        <header className="App-header">
          <p>Home</p>
          <p>Paper</p>
          <p>{this.state.paper}</p>
          <p>{this.state.yeah.id}</p>
            <div key={paper.id}>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
//export default App;
