import React from "react";
import Cards from "./cards/cards";

import style from "./categories.module.css";

const Categories = () => {
  return (
    <div>
      Kategorie
      <div className={style.gap}></div>
      <Cards />
    </div>
  );
};

export default Categories;
