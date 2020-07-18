import React, { PureComponent } from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class PaperStock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paper: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("paper").onSnapshot((chicken) => {
      const firebasePaper = chicken.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.setState({ paper: firebasePaper });
    });
  }

  AddPaper = () => {
    const add = firebase.firestore.FieldValue.increment(1);
    const chicken = firebase
      .firestore()
      .collection("paper")
      .doc("Pearlized Silver Cover");
    chicken.update({ reams: add });
  };

  MinusPaper = () => {
    const minus = firebase.firestore.FieldValue.increment(-1);
    const frog = firebase
      .firestore()
      .collection("paper")
      .doc("Pearlized Silver Cover");
    frog.update({ reams: minus });
  };

  render() {
    console.log("PaperName: " + this.state.PaperName);
    console.log("New Description: " + this.state.NewDescription);
    return (
      <div>
        <h2>Welcome to the StockRoom</h2>
        {this.state.paper.map((paper) => (
          <div key={paper.id} className={style.paperCard}>
            <h2>{paper.id}</h2>
            <p className={style.paperDescription}>{paper.description}</p>
            <p>Reams Available: {paper.reams}</p>
            <button
              onClick={
                (this.AddPaper = () => {
                  const add = firebase.firestore.FieldValue.increment(1);
                  const chicken = firebase
                    .firestore()
                    .collection("paper")
                    .doc(paper.id);
                  chicken.update({ reams: add });
                })
              }
            >
              Add Ream
            </button>
            <button
              onClick={
                (this.MinusPaper = () => {
                  const minus = firebase.firestore.FieldValue.increment(-1);
                  const frog = firebase
                    .firestore()
                    .collection("paper")
                    .doc(paper.id);
                  frog.update({ reams: minus });
                })
              }
            >
              Remove Ream
            </button>
            <p>Sheets per Ream: {paper.sheetsPerReam}</p>
            <p>Sheets in Stock: {paper.sheetsPerReam * paper.reams}</p>
            <p>Uses: {paper.uses}</p>
            <p>Weight: {paper.weight}</p>
            <p>Price: ${paper.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
