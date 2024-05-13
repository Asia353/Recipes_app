import React from "react";

import styles from "./page.module.css";
import CurrentDayView from "./components/currentDayCard/currentDayView";
import { Menu } from "../../navigation";
import { Callendar, Search } from "../../ui/components";
import Categories from "./components/categories/categories";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.card}>
        <Search />
        <Categories />
      </div>
      <div className={styles.rightmenu}>
        <Callendar />
        <CurrentDayView />
      </div>
    </div>
  );
};

export default MainPage;
