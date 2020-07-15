import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { AuthProvider } from "./database/auth";
import PrivateRoute from "./database/privateroute";
import style from "./style/index.scss";
import Nav from "./components/nav";
import NavOverlay from "./components/nav-overlay";
import Home from "./pages/home";
import Order from "./pages/order";
import Confirmation from "./pages/confirmation";
import Status from "./pages/status";
import Inventory from "./pages/inventory";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";

const App = withRouter(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        paper: [],
        isHit: true,
        butthole: 0,
        potato: "hidden",
        rice: "0%",
      };
    }

    componentDidUpdate(prevLocation) {
      if (this.props.location !== prevLocation.location) {
        this.onRouteChanged();
      }
    }

    onRouteChanged() {
      console.log("the route has been changed");
      this.setState((prevState) => ({
        isHit: !prevState.isHit,
      }));
      this.setState({ butthole: 0 });
      this.setState({ potato: "hidden" });
      this.setState({ rice: "0%" });
    }

    toggleOverlay = () => {
      const isHit = this.state.isHit;
      this.setState((prevState) => ({
        isHit: !prevState.isHit,
      }));
      if (isHit) {
        this.setState({ butthole: 1 });
        this.setState({ potato: "visible" });
        this.setState({ rice: "75vh" });
      } else {
        this.setState({ butthole: 0 });
        this.setState({ potato: "hidden" });
        this.setState({ rice: "0%" });
      }
    };

    render() {
      return (
        <div className={style.mainContainer}>
          <Nav drawerClickHandler={this.toggleOverlay}></Nav>
          <NavOverlay
            opacity={this.state.butthole}
            visibility={this.state.potato}
            height={this.state.rice}
          ></NavOverlay>
          <AuthProvider>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/order" component={Order}></Route>
              <Route path="/confirmation" component={Confirmation}></Route>
              <Route path="/status" component={Status}></Route>
              <Route path="/inventory" component={Inventory}></Route>
              <Route path="/about" component={About}></Route>
              <Route exact path="/login" component={Login}></Route>
              <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
              ></PrivateRoute>
            </Switch>
          </AuthProvider>
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
