import AppName from "./Components/app-name";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/Todoitem1";
import TodoItem2 from "./Components/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="todoItems">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
