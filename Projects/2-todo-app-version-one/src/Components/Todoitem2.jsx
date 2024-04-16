function TodoItem2() {
  let TodoItem = "Get a High Paying Job";
  let TodoDate = "24/02/2024";

  return (
    <div class="container my-row">
      <div class="row">
        <div class="col-6">{TodoItem}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
