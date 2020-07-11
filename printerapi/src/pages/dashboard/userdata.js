import React, { PureComponent } from "react";
//import style from "./index.module.scss";
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

