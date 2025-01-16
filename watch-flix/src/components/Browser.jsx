import UseNowPlayingMovies from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovie";
import UseTopRated from "../hooks/UseTopRated";
import MainContainer from "./MainContainer";
import { MovieList } from "./MovieList";
//** */ i have rename file from mainContainer -Maincontainer
const Browser = () => {
  UseNowPlayingMovies();
  usePopularMovies();
  UseTopRated();
  return (
    <div>
      <MainContainer />
      <MovieList />
    </div>
  );
};

export default Browser;
