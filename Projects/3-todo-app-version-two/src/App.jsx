import AppName from "./Components/app-name";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  let todoItems = [
    {
      Name: "Buy Home",
      DueDate: "Within 5year",
    },

    { Name: "Get a High Paying Job", DueDate: "Within 2year" },

    { Name: "Get a Luxury Car", DueDate: "Within 7year" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
