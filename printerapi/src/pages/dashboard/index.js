import React from "react";
import style from "./index.module.scss";
import EditInventory from "./editinventory";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.dashContainer}>
          <h1>Dashboard</h1>
          <EditInventory></EditInventory>
        </section>
      </div>
    );
  }
}

export default Dashboard;
