import styles from "./Input.module.css";

let Input = ({ keyPressed }) => {
  return (
    <input
      type="text"
      placeholder="Enter Your Fav Food"
      className={styles.Input}
      onKeyDown={keyPressed}
    />
  );
};

export default Input;
