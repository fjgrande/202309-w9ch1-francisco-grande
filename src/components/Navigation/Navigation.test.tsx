import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import Navigation from "./Navigation";

describe("Given a Navigation comporent", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'movies' link", () => {
      const expectedTextMovies = "movies";

      customRender(<Navigation />);

      const navigationLinkMovies = screen.getByRole("link", {
        name: expectedTextMovies,
      });

      expect(navigationLinkMovies).toBeInTheDocument();
    });
  });
});
