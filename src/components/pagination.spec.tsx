import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import userEvent from "@testing-library/user-event";

const onPageChangeCallback = vi.fn();

describe("pagination", () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });
  it("should render the correct amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={() => {}}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
  it("should be able to navigate to the previous page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback}
      />,
    );

    const previousPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });

    await user.click(previousPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });
  it("should be able to navigate to the first page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={5}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback}
      />,
    );

    const firstPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });

    await user.click(firstPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });
  it("should be able to navigate to the last page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback}
      />,
    );

    const lastPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });

    await user.click(lastPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
