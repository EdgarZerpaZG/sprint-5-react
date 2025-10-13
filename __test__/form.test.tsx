import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Form from "./../src/components/footer/form/form";

describe("Form validation", () => {
  it("show the error if is an invalid email", async () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Enter your email address");
    const button = screen.getByRole("button", { name: /contact us/i });

    await userEvent.type(input, "correo-invalido");
    await userEvent.click(button);

    const error = await screen.findByText(/invalid email/i);
    expect(error).toBeInTheDocument();
  });

  it("don't show the error if is a valid email", async () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Enter your email address");
    const button = screen.getByRole("button", { name: /contact us/i });

    await userEvent.type(input, "usuario@dominio.com");
    await userEvent.click(button);

    const error = screen.queryByText(/invalid email/i);
    expect(error).not.toBeInTheDocument();
  });
});