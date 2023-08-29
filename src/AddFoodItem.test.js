import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import AddFoodItem from "./AddFoodItem";
import SnackOrBoozeApi from "./Api";

jest.mock("./Api", () => ({
  addNewItem: jest.fn()
}));

describe("AddFoodItem", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <AddFoodItem type="snack" onAdd={() => {}} />
      </Router>
    );
  });

  it("submits new food item data", async () => {
    SnackOrBoozeApi.addNewItem.mockResolvedValue();

    render(
      <Router>
        <AddFoodItem type="snack" onAdd={() => {}} />
      </Router>
    );
 
    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Test Snack" } });
    fireEvent.change(screen.getByPlaceholderText("Recipe"), { target: { value: "Test Recipe" } });
    fireEvent.change(screen.getByPlaceholderText("Serve"), { target: { value: "Test Serve" } });
 
    await act(async () => {
      fireEvent.click(screen.getByText("Add"));
    });

    expect(SnackOrBoozeApi.addNewItem).toHaveBeenCalledWith("snack", {
      name: "Test Snack",
      recipe: "Test Recipe",
      serve: "Test Serve"
    });
  });
});
