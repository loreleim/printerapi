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
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          const replace = snapshot.data().status;
          this.setState({ orderStatus: replace });
        } else {
          this.setState({ orderStatus: "That order does not exist" });
        }
      });
    e.preventDefault();
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  renderMatches() {
    return <div>{this.state.orderStatus}</div>;
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.statusContainer}>
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
