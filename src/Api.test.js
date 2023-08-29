import SnackOrBoozeApi from "./Api";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("SnackOrBoozeApi", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("fetches snacks data correctly", async () => {
    const mockSnacks = [{ id: 1, name: "Snack 1" }, { id: 2, name: "Snack 2" }];

    mock.onGet("http://localhost:5000/snacks").reply(200, mockSnacks);

    const snacks = await SnackOrBoozeApi.getSnacks();

    expect(snacks).toEqual(mockSnacks);
  });

  it("handles errors while fetching snacks", async () => {
    mock.onGet("http://localhost:5000/snacks").reply(500);

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    await SnackOrBoozeApi.getSnacks();

    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  it("fetches drinks data correctly", async () => {
    const mockDrinks = [{ id: 1, name: "Drink 1" }, { id: 2, name: "Drink 2" }];

    mock.onGet("http://localhost:5000/drinks").reply(200, mockDrinks);

    const drinks = await SnackOrBoozeApi.getDrinks();

    expect(drinks).toEqual(mockDrinks);
  });

  it("handles errors while fetching drinks", async () => {
    mock.onGet("http://localhost:5000/drinks").reply(500);

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    await SnackOrBoozeApi.getDrinks();

    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  it("adds new item correctly", async () => {
    const newItem = { name: "New Snack", description: "Delicious" };

    mock.onPost("http://localhost:5000/snacks", newItem).reply(200, newItem);

    const response = await SnackOrBoozeApi.addNewItem("snacks", newItem);

    expect(response).toEqual(newItem);
  });

  it("throws error on adding new item failure", async () => {
    mock.onPost("http://localhost:5000/snacks").reply(500);

    await expect(SnackOrBoozeApi.addNewItem("snacks", {})).rejects.toThrow();
  });
});
