import { render, fireEvent, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";
import { Provider } from "react-redux";

const mockDashboard = () => {
  return (
    <Provider>
      <Dashboard />
    </Provider>
  );
};

describe("Dashboard", () => {
  test("show render new todo correctly", () => {
    render(<mockDashboard />);

    const inputElement = screen.getByPlaceholderText(/Add your todo here.../i);

    expect(inputElement).toBeInTheDocument();
  });
  test("should text appears when user starts typing", () => {
    render(<mockDashboard />);
    const inputElement = screen.getByPlaceholderText(/Add your todo here.../i);
    fireEvent.change(inputElement, { target: { value: "Buy eggs" } });
    expect(inputElement.value).toBe("Buy eggs");
  });
});
