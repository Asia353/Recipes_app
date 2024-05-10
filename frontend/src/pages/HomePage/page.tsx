import React from "react";

import styles from "./page.module.css";
import { Button } from "../../ui/components";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.centralText}>Home Page</h1>
      <p>This should be purple</p>
      <Button title="Button" onClick={() => {}} />
    </div>
  );
};

export default HomePage;
