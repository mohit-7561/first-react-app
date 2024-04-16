import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div className={styles.calculatorContainer}>
      <Display></Display>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
