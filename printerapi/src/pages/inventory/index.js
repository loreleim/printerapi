import React from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

class Inventory extends React.Component {
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
    return (
      <div className={style.mainContainer}>
        <section className={style.heroContainer}>
          <h1>Inventory</h1>
        </section>
      </div>
    );
  }
}

export default Inventory;
