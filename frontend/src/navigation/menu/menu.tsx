import React from "react";
import styles from "./menu.module.css";
import { Button, Profile } from "../../ui/components";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.wrapper}>PRZEPISY</div>
      <Profile />
      <div className={styles.buttonPanel}>
        <Button
          title="Home"
          size="md"
          className={styles.button}
          onClick={() => {}}
          variant="current"
        />
        <Button
          title="Zaplanuj posiłki"
          size="md"
          className={styles.button}
          variant="secondary"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Menu;
