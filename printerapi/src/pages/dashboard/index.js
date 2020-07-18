import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";
import PaperStock from "./paperStock";
import UserData from "./userdata";
import AddPaper from "./addpaper";
import AddUser from "./adduser";

class Dashboard extends React.Component {
  state = {
    on: false,
    addPaper: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

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
          <PaperStock></PaperStock>
          {this.state.addPaper && <AddPaper></AddPaper>}
          <button onClick={this.addPaperToggle}>Add New Paper Toggle</button>
          {this.state.on && <AddUser></AddUser>}
          <button onClick={this.toggle}>Toggle New User</button>
        </section>
        <div className={style.navSpacer}></div>
      </div>
    );
  }
}

export default Dashboard;
