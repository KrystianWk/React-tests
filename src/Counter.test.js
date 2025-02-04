import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Prawidłowo renderuje początkową wartość licznika", () => {
  render(<Counter />);
  const textElement = screen.getByText(/Aktualna wartość licznika: 0/i);
  expect(textElement).toBeInTheDocument();
});

test("Zwiększa wartość licznika po kliknięciu przycisku", () => {
  render(<Counter />);
  const button = screen.getByText(/Zwiększ/i);

  fireEvent.click(button);

  const updatedTextElement = screen.getByText(/Aktualna wartość licznika: 1/i);
  expect(updatedTextElement).toBeInTheDocument();
});
