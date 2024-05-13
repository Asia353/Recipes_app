import React from "react";
import styles from "./loginForm.module.css";
import { Input } from "../../../ui/components";

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <Input label="email" name="email" placeholder="" />
      <Input label="password" name="password" placeholder="" />
    </div>
  );
};

export default LoginForm;
