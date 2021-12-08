/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import TestPost from "../pages/posts/test-post";

describe("test post", () => {
  it("renders a heading", () => {
    render(<TestPost />);

    const heading = screen.getByRole("heading", {
      name: /test post/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
