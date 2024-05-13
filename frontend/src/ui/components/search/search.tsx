import React from "react";
import styles from "./search.module.css";
import Input from "../input/input";

const Search = () => {
  return (
    <Input
      label=""
      name="search"
      placeholder="Search"
      className={styles.search}
    />
  );
};

export default Search;
