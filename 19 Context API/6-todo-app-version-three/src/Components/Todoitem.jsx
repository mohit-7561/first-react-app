import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsContext";

function TodoItem({ TodoName, TodoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div class="container  my-row">
      <div class="row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger my-btn"
            onClick={() => deleteItem(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
