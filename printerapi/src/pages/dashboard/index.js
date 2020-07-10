import React from "react";
import style from "./index.module.scss";
import { AuthContext } from "../../database/auth";
import firebase from "../../database/firebase";
import EditInventory from "./editinventory";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.dashContainer}>
          <h1>Dashboard</h1>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          <EditInventory></EditInventory>
        </section>
      </div>
    );
  }
}

export default Dashboard;
