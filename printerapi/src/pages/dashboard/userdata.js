import React, { PureComponent } from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class UserData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const userID = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("users")
      .doc(userID)
      .onSnapshot((doc) => {
        const replace = doc.data().name;
        this.setState({ user: replace });
      });
  }

  render() {
    return (
      <div className={style.userContainer}>
        <h1>Hi, {this.state.user}</h1>
      </div>
    );
  }
}
