import styles from "./Buttons.module.css";

let Buttons = () => {
  let data = [
    "C",
    "1",
    "2",
    "*",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {data.map((items) => (
        <button className={styles.button}>{items}</button>
      ))}
    </div>
  );
};

export default Buttons;
