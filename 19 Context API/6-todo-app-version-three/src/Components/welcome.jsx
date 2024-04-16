import { TodoItemsContext } from "../store/todoItemsContext";
import { useContext } from "react";
import styles from "./welcome.module.css";

function WelcomeMesage() {
  const { currentTodoItems } = useContext(TodoItemsContext);

  return (
    currentTodoItems.length === 0 && (
      <p className={styles.welcome}>Welcome to the todo App</p>
    )
  );
}

export default WelcomeMesage;
