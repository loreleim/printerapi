import React, { PureComponent } from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class EditInventory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paper: [],
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
