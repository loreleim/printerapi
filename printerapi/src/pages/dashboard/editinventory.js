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
        {this.state.paper.map((paper) => (
          <div key={paper.id} className={style.paperCard}>
            <h2>{paper.id}</h2>
            <p>{paper.description}</p>
            <p>Reams Available: {paper.reams}</p>
            <p>Sheets per Ream: {paper.sheetsPerReam}</p>
            <p>Sheets in Stock: {paper.sheetsPerReam * paper.reams}</p>
            <p>Uses: {paper.uses}</p>
            <p>Weight: {paper.weight}</p>
          </div>
        ))}
        <label>
          New Paper Name
          <input
            type="text"
            name={"PaperName"}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            name={"NewDescription"}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          How Many Reams In Stock?
          <input
            type="text"
            name={"NewReams"}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          How Many Sheets in a Ream?
          <input
            type="text"
            name={"NewSheetsPerReam"}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          What do people use this paper for?
          <input
            type="text"
            name={"NewUses"}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          What is the GSM of the Paper?
          <input
            type="number"
            name={"NewWeight"}
            onChange={this.handleChange}
          ></input>
        </label>
        <button onClick={this.addPaper}>Add New Paper</button>
        <div className={style.navSpacer}></div>
      </div>
    );
  }
}
