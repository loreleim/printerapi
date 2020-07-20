import React from "react";
import style from "./index.module.scss";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Email: "",
      PW: "",
    };
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.settingsContainer}>
          <h1>Settings</h1>
        </section>
      </div>
    );
  }
}

export default Settings;
