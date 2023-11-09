import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/feature/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import MovieList from "../../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";

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
    <HomePageStyled>
      <main>
        <MovieList />
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
