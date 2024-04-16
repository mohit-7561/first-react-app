import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {
  const [currentDisplayValue, setCurrentDisplayValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCurrentDisplayValue("");
    } else if (buttonText === "=") {
      const result = eval(currentDisplayValue);
      setCurrentDisplayValue(result);
    } else {
      const newDisplayValue = currentDisplayValue + buttonText;
      setCurrentDisplayValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <Display displayValue={currentDisplayValue}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
