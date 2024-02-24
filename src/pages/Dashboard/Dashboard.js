import { useState } from "react";
import NewTodo from "../../components/Todos/New Todo/NewTodo";
import Todos from "../../components/Todos/Todos";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  return (
    <section>
      <div className="container">
        <NewTodo setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </section>
  );
};

export default Dashboard;
