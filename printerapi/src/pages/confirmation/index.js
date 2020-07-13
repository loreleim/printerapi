import React from "react";
import style from "./index.module.scss";
import storage from "../../database";
import firebase from "../../database/firebase";

class Confirmation extends React.Component {
  storage = this.props;

  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("orders")
      .doc("poop")
      .onSnapshot((doc) => {
        const replace = doc.data().status;
        this.setState({ details: replace });
      });
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.homeContainer}>
          <h1>Rockin! Your Order has Been Placed</h1>
          <p>Your Order Number is: {storage.orderNum}</p>
          <p>Your Order is currently: {this.state.details}</p>
        </section>
      </div>
    );
  }
}

export default Confirmation;
