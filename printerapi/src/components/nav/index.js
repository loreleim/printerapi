import React, { PureComponent } from "react";
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
          <nav className={style.mainNav}>
            <ul>
              <li>{this.state.message}</li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/order"}>Order</Link>
              </li>
              <li>
                <Link to={"/status"}>Status</Link>
              </li>
              <li>
                <Link to={"/inventory"}>Inventory</Link>
              </li>
              <li>
                <Link to={"/estimate"}>Estimate</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className={style.mainNav}>
            <ul>
              <li>{this.state.message}</li>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/order"}>Order</Link>
              </li>
              <li>
                <Link to={"/status"}>Status</Link>
              </li>
              <li>
                <Link to={"/inventory"}>Inventory</Link>
              </li>
              <li>
                <Link to={"/estimate"}>Estimate</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      /*<div>
        <nav
          className={style.mainNav}
          style={{
            visibility: this.props.visibility,
            opacity: this.props.opacity,
            height: this.props.height,
          }}
        >
          <ul>
            <li>{this.state.message}</li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/order"}>Order</Link>
            </li>
            <li>
              <Link to={"/status"}>Status</Link>
            </li>
            <li>
              <Link to={"/inventory"}>Inventory</Link>
            </li>
            <li>
              <Link to={"/estimate"}>Estimate</Link>
            </li>
          </ul>
        </nav>
      </div>*/
    );
  }
}
