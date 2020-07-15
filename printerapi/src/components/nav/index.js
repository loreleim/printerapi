import React, { PureComponent } from "react";
import { ReactComponent as NavSVG } from "../../images/drop.svg";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class Nav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <nav className={style.userNav}>
            <ul>
              <li>{this.state.message}</li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/order"}>New Order</Link>
              </li>
              <li>
                <Link to={"/inventory"}>Settings</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav
            className={style.mainNav}
            onClick={this.props.drawerClickHandler}
          >
            <NavSVG className={style.dropNav}></NavSVG>
          </nav>
        )}
      </div>
    );
  }
}
