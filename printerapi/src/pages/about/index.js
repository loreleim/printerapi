import React from "react";
import style from "./index.module.scss";
import storage from "../../database";

class About extends React.Component {
  storage = this.props;
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.homeContainer}>
          <h1>About</h1>
        </section>
      </div>
    );
  }
}

export default About;
