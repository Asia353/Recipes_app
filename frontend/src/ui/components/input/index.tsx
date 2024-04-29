import React, { forwardRef } from "react";

import styles from "./input.module.css";

type InputProps = {
  label: string;
  name: string;
  onFocus?: () => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onFocus, name }, ref) => {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={name}>{label}</label>
        <input ref={ref} onFocus={onFocus} name={name} />
      </div>
    );
  }
);

Input.displayName = "input";

export default Input;
