import React from "react";
import style from "./index.module.scss";

class Estimate extends React.Component {
  constructor(props) {
    super(props);
    this.test = ["test", "something"];
    this.state = {
      suggestions: [],
    };
  }

  textChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.test.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions }));
  };

  renderMatches() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div>
        {suggestions.map((test) => (
          <li>{test}</li>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Explore</h1>
          <input type="text" onChange={this.textChange}></input>
          {this.renderMatches()}
        </section>
      </div>
    );
  }
}
export default Estimate;
