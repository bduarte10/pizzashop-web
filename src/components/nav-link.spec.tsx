import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the active link", () => {
    const wrapper = render(<NavLink to="/about" />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
        );
      },
    });
  });
});
