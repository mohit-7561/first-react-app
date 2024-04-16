import { MdDelete } from "react-icons/md";

function TodoItem({ TodoName, TodoDate, onClickDelete }) {
  return (
    <div class="container  my-row">
      <div class="row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger my-btn"
            onClick={() => onClickDelete(TodoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
