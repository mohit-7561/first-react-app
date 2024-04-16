import AppName from "./Components/app-name";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
// import Welcome from "./Components/welcome";
import WelcomeMesage from "./Components/welcome";
import TodoItemsContextProvider from "./store/todoItemsContext";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMesage></WelcomeMesage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
