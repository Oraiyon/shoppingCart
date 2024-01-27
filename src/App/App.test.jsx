import App from "./App.jsx";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Test App component", () => {
  test("h1 renders with 'Hello'", () => {
    render(<App />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toHaveTextContent("Name Here");
  });
});
