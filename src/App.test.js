import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Oleksiy Vasin greeting", () => {
  render(<App />);
  expect(screen.getByText(/Oleksiy Vasin/i)).toBeInTheDocument();
});
