import React from "react";
import styles from "./button.module.css";

const buttonSizes = ["sm", "md", "lg"] as const;
const buttonVariants = ["danger", "primary", "outline"] as const;

type ButtonProps = {
  title: string;
  size?: (typeof buttonSizes)[number];
  variant?: (typeof buttonVariants)[number];
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const Button = ({
  title,
  size = "sm",
  variant = "primary",
  onClick,
  icon,
  disabled = false,
}: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[size]} ${styles[variant]}`;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={buttonClassName}
    >
      {title}
    </button>
  );
};

export default Button;
