import React from "react";
import styles from "./page_layout.module.css";

const LoginPage = () => {
  return (
    <div>
      <header className={styles.head}>Login Page</header>
      <div className={styles.inputGroup}>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Username"
          aria-label="Username"
        ></input>
      </div>
      <br></br>
      <div className={styles.inputGroup}>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          type="password"
          placeholder="Password"
          aria-label="Password"
        ></input>
      </div>
      <div className={styles.enter}>
        <button className="btn btn-outline btn-accent" type="submit">
          Enter
        </button>
        <a className={styles.button} href="/users">
          <button className="btn btn-outline btn-accent">
            Users Information
          </button>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
