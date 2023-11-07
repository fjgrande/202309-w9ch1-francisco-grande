import { MovieStructure } from "../../store/feature/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, director, year },
}: MovieCardProps): React.ReactElement => {
  return (
    <div className="card">
      <h2 className="card__title">movie: {name}</h2>
      <span className="card__year">release: {year}</span>
      <span className="card__director">director: {director} </span>
    </div>
  );
};

export default MovieCard;
