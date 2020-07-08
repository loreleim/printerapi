import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import style from "./style/index.scss";
import Nav from "./components/nav";
import Home from "./pages/home";
import Order from "./pages/order";
import Status from "./pages/status";
import Inventory from "./pages/inventory";
import Estimate from "./pages/estimate";

const App = withRouter(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        paper: [],
      };
    }

    componentDidMount() {}

    render() {
      return (
        <div className={style.mainContainer}>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/order" component={Order}></Route>
            <Route path="/status" component={Status}></Route>
            <Route path="/inventory" component={Inventory}></Route>
            <Route path="/estimate" component={Estimate}></Route>
          </Switch>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename="/printerapi">
        <App />
      </Router>
    );
  }
}

export default RoutedApp;
