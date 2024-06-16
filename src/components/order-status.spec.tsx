import { OrderStatus } from "./order-status";
import { render } from "@testing-library/react";

describe("Order Status", () => {
  it("should render the right text and badge when the status is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);
    const statusText = wrapper.getByText("Pendente");
    const badge = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badge).toHaveClass("bg-slate-400");
  });

  it("should render the right text and badge when the status is canceled", () => {
    const wrapper = render(<OrderStatus status="canceled" />);
    const statusText = wrapper.getByText("Cancelado");
    const badge = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badge).toHaveClass("bg-rose-500");
  });

  it("should render the right text and badge when the status is delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);
    const statusText = wrapper.getByText("Entregue");
    const badge = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badge).toHaveClass("bg-emerald-500");
  });

  it("should render the right text and badge when the status is processing ", () => {
    const wrapper = render(<OrderStatus status="processing" />);
    const statusText = wrapper.getByText("Em preparo");
    const badge = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badge).toHaveClass("bg-amber-500");
  });

  it("should render the right text and badge when the status is delivering ", () => {
    const wrapper = render(<OrderStatus status="delivering" />);
    const statusText = wrapper.getByText("Em entrega");
    const badge = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badge).toHaveClass("bg-amber-500");
  });
});
