import { useState } from "react";
import Item from "./item";

let FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newFoodItem = [...activeItems, item];
    setActiveItems(newFoodItem);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          buyButtonClicked={() => onBuyButton(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

// item is an array of items
// "foodItem={item}" we're passing the individual item from the items array as a prop to the Item component. The prop name here is foodItem. So, foodItem is not an array; it's just a name chosen for the prop.

// item represents a single item from the items array.
