import React from "react";
import renderer from "react-test-renderer";
import TestPost from "../pages/posts/test-post";

it("renders homepage unchanged", () => {
  const tree = renderer.create(<TestPost />).toJSON();
  expect(tree).toMatchSnapshot();
});
