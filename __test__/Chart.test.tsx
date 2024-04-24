import Home from "@/app/page";
import Chart from "@/components/layout/Chart/Chart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import test from "node:test";
import { use } from "react";

describe("Chart", () => {
  it("renders a chart", () => {
    render(<Chart />);

    // Find the canvas element containing the chart
    const chartCanvas = screen.getByTestId("chart-canvas");

    // Assert that the canvas element is present
    expect(chartCanvas).toBeInTheDocument();
  });
});
