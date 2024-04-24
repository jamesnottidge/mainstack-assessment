import Home from "@/app/page";
import Chart from "@/components/layout/Chart/Chart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import test from "node:test";
import { use } from "react";

describe("Home", () => {
  it("renders a chart", () => {
    render(<Home />);

    // Find the canvas element containing the chart
    const filter = screen.getByText("Filter");

    // Assert that the canvas element is present
    expect(filter).toBeInTheDocument();
  });
});
