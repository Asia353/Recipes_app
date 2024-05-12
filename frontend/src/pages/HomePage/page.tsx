import React from "react";

import styles from "./page.module.css";
import { Button } from "../../ui/components";
import { useAuth } from "../../contexts/auth";

const HomePage = () => {
  const { session, isLoading } = useAuth();
  return (
    <div className={styles.container}>
      <h1 className={styles.centralText}>Home Page</h1>
      <p>This should be purple</p>
      {!isLoading &&
        (session ? (
          <h1 className={styles.centralText}>Welcome {session.user.email}</h1>
        ) : (
          <h1 className={styles.centralText}>Not logged in</h1>
        ))}
      <Button title="Button" onClick={() => {}} />
    </div>
  );
};

export default HomePage;
