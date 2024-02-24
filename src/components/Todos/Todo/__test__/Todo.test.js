import { render, fireEvent, screen } from "@testing-library/react";
import Todo from "../Todo";

describe("Todo", () => {
  test("should render todo correctly", () => {
    // const setTodosMock = jest.fn();
    render(<Todo id={1} text={"Buy eggs"} done={false} />);
  });
});
