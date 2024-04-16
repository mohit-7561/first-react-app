import TodoItem from "./Todoitem";

let TodoItems = ({ todoItems, onClickDelete }) => {
  return (
    <div className="todoItems">
      {todoItems.map((item) => (
        <TodoItem
          key={item.Name}
          TodoName={item.Name}
          TodoDate={item.DueDate}
          onClickDelete={onClickDelete}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
