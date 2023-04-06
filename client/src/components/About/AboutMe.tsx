import styles from "./AboutMe.module.scss";
import { useState } from "react";

export function AboutMe() {
  const [disabled, setDisabled] = useState(true);

  function handleEditClick() {
    setDisabled(!disabled);
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper_row}>
        <h4>ABOUT ME</h4>
        <button onClick={handleEditClick}>{disabled ? "Edit" : "Save"}</button>
      </div>
      <div className={styles.area_container}>
        <textarea
          disabled={disabled}
          placeholder="Add something about you."
        ></textarea>
        {!disabled && (
          <img src={"/pencil.svg"} className={styles.pencil_icon} />
        )}
      </div>
      <div className={styles.line} />
    </div>
  );
}
