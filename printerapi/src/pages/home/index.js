import React from "react";
import style from "./index.module.scss";

class Home extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.homeContainer}>
          <h1>Contactless Pay &amp; Print</h1>
        </section>
      </div>
    );
  }
}

export default Home;
