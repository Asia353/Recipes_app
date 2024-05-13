import React from "react";
import styles from "./button.module.css";

const buttonSizes = ["sm", "md", "lg"] as const;
const buttonVariants = [
  "danger",
  "primary",
  "outline",
  "secondary",
  "current",
] as const;

type ButtonProps = {
  title: string;
  size?: (typeof buttonSizes)[number];
  variant?: (typeof buttonVariants)[number];
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  title,
  size = "sm",
  variant = "primary",
  onClick,
  icon,
  disabled = false,
  className = "",
}: ButtonProps) => {
  const buttonClassName = `${styles.button} ${styles[size]} ${styles[variant]} ${className}`;
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
