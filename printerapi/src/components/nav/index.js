import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class Nav extends PureComponent {
  render() {
    return (
      <div>
        <nav
          className={style.mainNav}
          style={{
            visibility: this.props.visibility,
            opacity: this.props.opacity,
            height: this.props.height,
          }}
        >
          <ul>
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
      </div>
    );
  }
}
