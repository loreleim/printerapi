import React from "react";
import style from "./index.module.scss";

class About extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.aboutContainer}>
          <h1>About</h1>
        </section>
      </div>
    );
  }
}

export default About;
