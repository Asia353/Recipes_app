import React from "react";
import styles from "./LoginForm.module.css";
import { Input } from "../../../ui/components";

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <Input label="email" name="email" />
      <Input label="password" name="password" />
    </div>
  );
};

export default LoginForm;
