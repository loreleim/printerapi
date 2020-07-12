import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Oasis: "",
      fileInputs: [],
    };
  }
  newOrder = (e) => {
    firebase
      .firestore()
      .collection("orders")
      .doc()
      .set({
        firstname: `${this.state.FirstName}`,
        lastname: `${this.state.LastName}`,
        oasis: `${this.state.Oasis}`,
        status: "awaiting approval",
      });
    e.preventDefault();
  };

  addFile = () => {
    this.setState({ fileInputs: [...this.state.fileInputs, ""] });
  };

  removeFile = (index) => {
    this.state.fileInputs.splice(index, 1);
    this.setState({ fileInputs: this.state.fileInputs });
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Place an Order</h1>
          <form onSubmit={this.newOrder}>
            <label>
              First Name
              <input
                name={"FirstName"}
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Last Name
              <input
                name={"LastName"}
                type="text"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Oasis ID
              <input
                name={"Oasis"}
                type="number"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Upload PDF
              <input name={"File"} type="file" accept="application/pdf" />
            </label>

            {this.state.fileInputs.map((file) => (
              <div key={file.id}>
                <input value={file}></input>
                <button onClick={this.removeFile}>Remove</button>
              </div>
            ))}
            <button classname={style.addButton} onClick={this.addFile}>
              Add File
            </button>
            <button type="submit">Place Order</button>
          </form>
        </section>
      </div>
    );
  }
}
