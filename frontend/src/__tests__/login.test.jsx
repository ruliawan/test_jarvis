import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from '../pages/login';

describe("Form Login", () => {
  it("menampilkan error jika field kosong", async () => {
    render(<Login />);
    const tombol = screen.getByText("Login");
    fireEvent.click(tombol);
    const error = await screen.findByText(/Email dan password wajib diisi/i);
    expect(error).toBeInTheDocument();
  });
});