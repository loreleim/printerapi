import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../../database/firebase";
import { AuthContext } from "../../database/auth";
import style from "./index.module.scss";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={style.mainContainer}>
      <section className={style.loginContainer}>
        <h1>Log in</h1>
        <form className={style.loginForm} onSubmit={handleLogin}>
          <label>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </section>
    </div>
  );
};

export default withRouter(Login);
