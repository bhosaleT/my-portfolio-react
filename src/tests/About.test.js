import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import About from "../components/About";

test("Should render About component correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<About />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
