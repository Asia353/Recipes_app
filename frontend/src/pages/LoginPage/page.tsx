import React from "react";
import LoginForm from "./components/loginForm";

import styles from "./page.module.css";

const LoginPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
