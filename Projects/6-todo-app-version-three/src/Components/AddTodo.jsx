import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItems }) {
  // const [currentTodoItem, setTodoItem] = useState("");
  // const [currentTodoItemDate, setTodoItemDate] = useState("");
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleTodoItem = (event) => {
  //   setTodoItem(event.target.value);
  // };
  // const handleTodoItemDate = (event) => {
  //   setTodoItemDate(event.target.value);
  // };

  const handleAddButton = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItems(todoName, todoDate);

    // setTodoItem("");
    // setTodoItemDate("");
  };

  return (
    <div className="container text-center my-row">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // onChange={handleTodoItem}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            // onChange={handleTodoItemDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-btn"
            onClick={handleAddButton}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
