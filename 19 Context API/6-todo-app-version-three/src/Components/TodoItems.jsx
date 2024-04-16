import TodoItem from "./Todoitem";
import { TodoItemsContext } from "../store/todoItemsContext";
import { useContext } from "react";

const TodoItems = () => {
  const { currentTodoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="todoItems">
      {currentTodoItems.map((item) => (
        <TodoItem
          key={item.Name}
          TodoName={item.Name}
          TodoDate={item.DueDate}
          onClickDelete={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
