import { useAppSelector } from "../../store/hooks";
import MovieCard from "../MovieCard/MovieCard";
import MoviesListStyled from "./MoviesListStyled";

const MovieList = (): React.ReactElement => {
  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <MoviesListStyled>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </MoviesListStyled>
  );
};

export default MovieList;
