import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.test = ["test", "something"];
    this.state = {
      suggestions: [],
      OrderNumber: "",
      orderStatus: [],
    };
  }

  searchStatus = (e) => {
    firebase
      .firestore()
      .collection("orders")
      .doc(`${this.state.OrderNumber}`)
      .onSnapshot((doc) => {
        const replace = doc.data().status;
        this.setState({ orderStatus: replace });
        if (snapshot.exists) {
      });
    e.preventDefault();
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
    console.log(this.state.OrderNumber);
  };

  renderMatches() {
    if (this.state.orderStatus.length === 0) {
      return null;
    }
    return <div>{this.state.orderStatus}</div>;
  }

  render() {
    return (
      <div className={style.statusContainer}>
        <section className={style.heroContainer}>
          <h1>View Order Status</h1>
          <form onSubmit={this.searchStatus}>
            <label>
              <input
                name={"OrderNumber"}
                placeholder="search by order number"
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Search</button>
          </form>
          {this.renderMatches()}
        </section>
      </div>
    );
  }
}

export default Status;
