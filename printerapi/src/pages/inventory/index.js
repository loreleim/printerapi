import React from "react";
import style from "./index.module.scss";

class Inventory extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Inventory</h1>
        </section>
      </div>
    );
  }
}

export default Inventory;
