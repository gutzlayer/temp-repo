import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  test("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute(
      "src",
      "img/img.png"
    );
    expect(
      screen.getByRole("heading", { name: "title 1 0" })
    ).toBeInTheDocument();
    expect(screen.getByText("body 1")).toBeInTheDocument();
  });

  test("shoul match sanpshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
