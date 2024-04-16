import styles from "./welcome.module.css";

function WelcomeMesage({ currentTodoItems }) {
  return (
    currentTodoItems.length === 0 && (
      <p className={styles.welcome}>Welcome to the todo App</p>
    )
  );
}

export default WelcomeMesage;
