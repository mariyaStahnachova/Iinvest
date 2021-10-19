import {act, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('App component', () => {
  it("should render correctly", async () => {
    render(<App />);
    const startText = screen.getByText(/Select company and enter a value to find out the calculation!/i);
    expect(startText).toBeInTheDocument();

  });
  it("should allow choose Tesla company", async () => {
    render(<App />);
    const startText = screen.getByAltText(/Tesla logo/i);
    await act(async () => {
      userEvent.click(startText);
    });
    const input = screen.getByLabelText("Amount of Money")
    userEvent.type(input,"1000");
    const text = screen.getByText(/in Tesla five years ago/i);
    const count = screen.getByText(/5,560/i);
    expect(text).toBeInTheDocument()
    expect(count).toBeInTheDocument()

  });
  it("should allow choose Apple company", async () => {
    render(<App />);
    const startText = screen.getByAltText(/Apple logo/i);
    await act(async () => {
      userEvent.click(startText);
    });
    const input = screen.getByLabelText("Amount of Money")
    userEvent.type(input,"1000");
    const text = screen.getByText(/in Apple five years ago/i);
    const count = screen.getByText(/5,560/i);
    expect(text).toBeInTheDocument()
    expect(count).toBeInTheDocument()
  });
  it("should not allow enter value until company is not set", async () => {
    render(<App />);
    const input = screen.getByLabelText("Amount of Money")
    expect(input).toBeDisabled()
  });
});