import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import MovieList from "../../components/MoviesList/MoviesList";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      const currentMovies = await getMovies();
      dispatch(loadMoviesActionCreator(currentMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <>
      <header className="main-container">
        <h2 className="page-title">Gangster Movies List</h2>
      </header>
      <main>
        <MovieList />
      </main>
    </>
  );
};

export default HomePage;
