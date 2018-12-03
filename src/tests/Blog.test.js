import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Blog from "../components/Blog";

test("The blog component should render properly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Blog />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
