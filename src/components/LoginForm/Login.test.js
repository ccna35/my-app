import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("renders login form correctly", () => {
    render(<LoginForm onLogin={() => {}} />);

    // Check if form elements are rendered
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("updates username and password on input change", () => {
    render(<LoginForm onLogin={() => {}} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Check if inputs are updated
    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("password123");
  });

  test("calls onLogin with username and password on form submit", () => {
    const mockOnLogin = jest.fn();
    render(<LoginForm onLogin={mockOnLogin} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/login/i);

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Simulate form submission without wrapping in act
    fireEvent.click(submitButton);

    // Check if onLogin is called with the correct arguments
    expect(mockOnLogin).toHaveBeenCalledWith("testuser", "password123");
  });
});
