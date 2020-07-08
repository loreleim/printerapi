import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import style from "./style/index.scss";
import firebase from "./database/firebase.js";
import Nav from "./components/nav";
import Home from "./pages/home";
import Order from "./pages/order";
import Status from "./pages/status";
import Inventory from "./pages/inventory";
import Estimate from "./pages/estimate";

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
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ paper: firebasePaper });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Home</p>
          <p>Paper</p>
          {this.state.paper.map((paper) => (
            <div key={paper.id}>
              <p>{paper.id}</p>
              <p>{paper.description}</p>
              <p>{paper.size}</p>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

