import React from "react";
import { categories } from "../../../../../constans/categories";
import styles from "./cards.module.css";
import { CategoryCard } from "../../../../../ui/components";

const Cards = () => {
  return (
    <div className={styles.cards}>
      {categories.map((element) => (
        <CategoryCard name={element} key={element} />
      ))}
    </div>
  );
};

export default Cards;
