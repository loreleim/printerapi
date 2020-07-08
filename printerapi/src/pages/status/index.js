import React from "react";
import style from "./index.module.scss";

class Status extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Status</h1>
        </section>
      </div>
    );
  }
}

export default Status;
