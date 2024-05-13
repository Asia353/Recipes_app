import React from "react";
import styles from "./categoryCard.module.css";
const categoryCardVariants = ["primary", "focus"] as const;

type CategoryCardProps = {
  name: string;
  icon?: React.ReactNode;
  variant?: (typeof categoryCardVariants)[number];
  onClick?: () => void;
};

const CategoryCard = ({
  name,
  icon,
  onClick,
  variant = "primary",
}: CategoryCardProps) => {
  const categoryClassName = `${styles.cardButton} ${styles[variant]}`;
  return (
    <div className={styles.card}>
      <button className={categoryClassName} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default CategoryCard;
