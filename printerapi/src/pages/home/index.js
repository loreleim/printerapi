import React from "react";
import style from "./index.module.scss";

class Home extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.homeContainer}>
          <h1>Contactless Pay &amp; Print</h1>
          <div>
            <button onClick={() => this.props.history.push("/order")}>
              New Order
            </button>
          </div>
          <div>
            <button onClick={() => this.props.history.push("/status")}>
              View Order Status
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
