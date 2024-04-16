import styles from "./item.module.css";

let Item = ({ foodItem, bought, buyButtonClicked }) => {
  return (
    <li
      className={`${styles["foodContainer"]} list-group-item  ${
        bought && "active"
      }`}
    >
      <span className={styles["foodItem"]}>{foodItem}</span>
      <button
        className={`${styles.buyButton} btn btn-primary`}
        onClick={buyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

// foodItem comes from "item.jsx"
// foodItem is a prop name used to pass the item to the Item component. It's not an array itself; it's just a name for the prop.
