import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    async () => {
      const currentMovies = await getMovies();
      dispatch(loadMoviesActionCreator(currentMovies));
    };
  }, [dispatch, getMovies]);

  return (
    <section className="main-container">
      <h2 className="page-title">Ganster Movies List</h2>
    </section>
  );
};

export default HomePage;
