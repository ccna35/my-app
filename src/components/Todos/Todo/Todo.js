import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { removeTodo, toggleDone } from "../../../redux/todoSlice";

const Todo = ({ id, text, done }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeTodo(id));

  const handleTodoStatus = () => dispatch(toggleDone(id));

  return (
    <div className="d-flex align-items-center gap-3" data-testid="todo">
      <p
        className={
          done ? "text-decoration-line-through m-0" : "text-primary m-0"
        }
      >
        {text}
      </p>
      <Button type="button" onClick={handleTodoStatus}>
        {done ? "Undo" : "Done"}
      </Button>
      <Button type="button" onClick={handleDelete} variant="danger">
        Delete
      </Button>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
