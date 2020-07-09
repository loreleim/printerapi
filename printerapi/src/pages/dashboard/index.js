import React from "react";
import style from "./index.module.scss";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.dashContainer}>
          <h1>Dashboard</h1>
        </section>
      </div>
    );
  }
}

export default Dashboard;
