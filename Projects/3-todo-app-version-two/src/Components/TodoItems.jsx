import TodoItem from "./Todoitem";

let TodoItems = ({ todoItems }) => {
  return (
    <div className="todoItems">
      {todoItems.map((item) => (
        <TodoItem TodoName={item.Name} TodoDate={item.DueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
