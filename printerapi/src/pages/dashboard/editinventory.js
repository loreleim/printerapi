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

  addPaper = () => {
    firebase
      .firestore()
      .collection("paper")
      .doc(`${this.state.PaperName}`)
      .set({
        description: `${this.state.NewDescription}`,
        reams: `${this.state.NewReams}`,
        sheetsPerReam: `${this.state.NewSheetsPerReam}`,
        uses: `${this.state.NewUses}`,
        weight: `${this.state.NewWeight}`,
      });
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    console.log("PaperName: " + this.state.PaperName);
    console.log("New Description: " + this.state.NewDescription);
    return (
      <div>
        <h2>Welcome to the StockRoom</h2>
