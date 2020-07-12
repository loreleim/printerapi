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
            <label for="cars">What Order Type Are you Doing?</label>
            <select name="carlist" form="carform">
              <option value="regular">Regular Cut Sheet</option>
              <option value="book">Perfect Bound Book</option>
              <option value="businesscard">Business Card</option>
              <option value="photomural">Photo Mural</option>
              <option value="scan">Scan</option>
            </select>
            <button type="submit">Place Order</button>
          </form>
        </section>
      </div>
    );
  }
}
