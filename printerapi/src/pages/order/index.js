import React from "react";
import style from "./index.module.scss";

class Order extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Order</h1>
        </section>
      </div>
    );
  }
}

export default Order;
