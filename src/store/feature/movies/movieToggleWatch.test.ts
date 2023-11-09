import mockMovies from "../../../mocks/mockData";
import { moviesReducer, toggleWatchMoviesActionCreator } from "./moviesSlice";
import { MoviesStateStructure } from "./types";

describe("Given the moviesReducer reducer", () => {
  describe("When the reducer receive the state with Goodfellas and an action to toggle the movie as watched", () => {
    test("Then it should return state with Goodfellas as watch", () => {
      const currentState: MoviesStateStructure = { movies: mockMovies };
      const goodFellasId = 2;
      const expectedIsSeen = true;

      const toggleWatchAction = toggleWatchMoviesActionCreator(goodFellasId);
      const newState = moviesReducer(currentState, toggleWatchAction);
      const goodFellas = newState.movies[1];

      expect(goodFellas.isSeen).toBe(expectedIsSeen);
    });
  });
});
