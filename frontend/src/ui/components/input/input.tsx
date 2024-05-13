import React, { forwardRef } from "react";

import styles from "./input.module.css";

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  onFocus?: () => void;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onFocus, name, placeholder, className }, ref) => {
    const inputClassName = `${styles.input} ${className}`;
    return (
      <div className={styles.wrapper}>
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          onFocus={onFocus}
          name={name}
          className={inputClassName}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

Input.displayName = "input";

export default Input;
