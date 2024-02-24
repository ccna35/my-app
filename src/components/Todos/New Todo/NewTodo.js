import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/todoSlice";

const NewTodo = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const randomId = () => {
    return Math.floor(Math.random() * 1_000_000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      console.log(text + 1);
      dispatch(addTodo({ id: randomId(), text }));
      setText("");
    }
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex align-items-center gap-3 mb-2 py-4"
    >
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          value={text}
          type="text"
          placeholder="Add your todo here..."
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default NewTodo;
