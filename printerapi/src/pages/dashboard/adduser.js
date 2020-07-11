import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Email: "",
      PW: "",
    };
  }

  addUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.Email, this.state.PW)
      .then((credential) => {
        return firebase
          .firestore()
          .collection("users")
          .doc(credential.user.uid)
          .set({
            email: credential.user.email,
            uid: credential.user.uid,
            name: `${this.state.UserName}`,
          });
      });
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <div className={style.addUserContainer}>
        <section className={style.homeContainer}>
          <h1>Home</h1>
          <label>
            First Name
            <input
              type="text"
              name={"UserName"}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Email
            <input type="email" name={"Email"} onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input
              name={"PW"}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </label>
          <button classname={style.toggle} onClick={this.addUser}>
            Add New User
          </button>
        </section>
      </div>
    );
  }
}

export default AddUser;
