import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";
import EditInventory from "./editinventory";
import UserData from "./userdata";

class Dashboard extends React.Component {

  addPaperToggle = () => {
    this.setState({
      addPaper: !this.state.addPaper,
    });
  };

  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.dashContainer}>
          <h1>Dashboard</h1>
          <UserData></UserData>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          <EditInventory></EditInventory>
        </section>
      </div>
    );
  }
}

export default Dashboard;
