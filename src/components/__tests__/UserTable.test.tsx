// import React from "react";
import React from "react";
import { render, screen } from "@testing-library/react";
import UserTable from "../UserTable";

test("renders search input", async () => {
  render(<UserTable />);
  const input = await screen.findByPlaceholderText(/search users/i);
  expect(input).toBeInTheDocument();
});
