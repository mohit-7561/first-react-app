import AppName from "./Components/app-name";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./Components/welcome";
import WelcomeMesage from "./Components/welcome";

function App() {
  const [currentTodoItems, setTodoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    // console.log(`item added: ${itemName}, Date: ${itemDueDate}`);
    const newTodoItems = [
      ...currentTodoItems,
      { Name: itemName, DueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = currentTodoItems.filter(
      (item) => item.Name !== todoItemName
    );
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItems={handleNewItems} />
      {currentTodoItems.length === 0 && <WelcomeMesage></WelcomeMesage>}
      <TodoItems
        todoItems={currentTodoItems}
        onClickDelete={handleDeleteButton}
      ></TodoItems>
    </center>
  );
}

export default App;
