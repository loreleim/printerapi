import React, { PureComponent } from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class EditInventory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paper: [],
      newpaperid: "",
      PaperName: "",
      NewDescription: "",
      NewReams: 0,
      NewSheetsPerReam: 0,
      NewUses: [],
      NewWeight: 0,
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
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
