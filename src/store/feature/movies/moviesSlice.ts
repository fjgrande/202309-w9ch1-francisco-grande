import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesStateStructure } from "./types";
import { MovieStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: action.payload,
    }),

    toggleWatchMovies: (
      currenState,
      action: PayloadAction<number>,
    ): MoviesStateStructure => ({
      ...currenState,
      movies: currenState.movies.map((movie) => ({
        ...movie,
        isSeen: movie.id === action.payload ? !movie.isSeen : movie.isSeen,
      })),
    }),
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchMovies: toggleWatchMoviesActionCreator,
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
