import { useDispatch } from "react-redux";
import { MovieStructure } from "../../store/feature/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import { useCallback } from "react";
import { toggleWatchMoviesActionCreator } from "../../store/feature/movies/moviesSlice";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, director, year, picture, isSeen, id },
}: MovieCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const onchange = useCallback(() => {
    dispatch(toggleWatchMoviesActionCreator(id));
  }, [dispatch, id]);

  return (
    <MovieCardStyled>
      <h2 className="card__title">{name}</h2>
      <img
        className="card__picture"
        src={picture}
        alt={name}
        width="225"
        height="300"
      />
      <span className="card__year">Release: {year}</span>
      <span className="card__director">Director: {director} </span>
      <label>
        Movie is seen?
        <input
          type="checkbox"
          className="card__checkbox"
          checked={isSeen}
          onChange={onchange}
        />
      </label>
    </MovieCardStyled>
  );
};

export default MovieCard;
