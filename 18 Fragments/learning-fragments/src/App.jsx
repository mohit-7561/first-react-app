import FoodItems from "./Components/foodItems";
import ErrorMessage from "./Components/Error Message";
import "./app.css";
import Container from "./Components/Container";
import Input from "./Components/Input";
import { useState } from "react";

function App() {
  // let foodItems =

  // let [textValue, textSetValue] = useState("Input Value");

  let [foodItems, foodSetValue] = useState([]);

  let keyPressed = (event) => {
    // console.log(event.target.value);
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      let newItems = [...foodItems, newFoodItems];
      foodSetValue(newItems);
    }

    // console.log(event);
    // foodSetValue();
    // textSetValue(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="header">Fav Foods</h1>
        <Input keyPressed={keyPressed}></Input>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
