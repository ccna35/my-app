import PropTypes from "prop-types";
import Todo from "./Todo/Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <div className="py-1 d-flex flex-column gap-3">
      <div className="py-1 d-flex flex-column gap-3">
        {todos.map(({ id, text, done }) => {
          return <Todo key={id} text={text} id={id} done={done} />;
        })}
      </div>
      <div>
        <span className="fw-bold">Number of All Todos:</span> {todos.length}
      </div>
      <div>
        <span className="fw-bold">Number of Completed Todos:</span>{" "}
        {todos.filter((todo) => todo.done).length}
      </div>
      <div>
        <span className="fw-bold">Number of Not Completed Todos:</span>{" "}
        {todos.filter((todo) => !todo.done).length}
      </div>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
