import { MovieStructure } from "../../store/feature/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, director, year, picture },
}: MovieCardProps): React.ReactElement => {
  return (
    <div className="card">
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
    </div>
  );
};

export default MovieCard;
