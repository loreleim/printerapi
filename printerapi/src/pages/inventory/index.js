import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: [],
      suggestions: [],
      test: ["test", "something"],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("paper")
      .onSnapshot((chicken) => {
        const firebasePaper = chicken.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ paper: firebasePaper });
      });
  }

  textChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.test.sort().filter((v) => regex.test(v));
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
          <h1>Inventory</h1>
          {this.state.paper.map((paper) => (
            <div key={paper.id}>
              <p>{paper.id}</p>
              <p>{paper.description}</p>
              <p>{paper.size}</p>
            </div>
          ))}
          <input type="text" onChange={this.textChange}></input>
          {this.renderMatches()}
        </section>
      </div>
    );
  }
}

export default Inventory;
