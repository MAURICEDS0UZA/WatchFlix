import UseNowPlayingMovies from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovie";
import MainContainer from "./MainContainer";
import NowPlayingMovies from "./NowPlayingMovies";
import TopRatedMovies from "./TopRatedMovies";
//** */ i have rename file from mainContainer -Maincontainer
const Browser = () => {
  UseNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <MainContainer />
      <NowPlayingMovies />
      <TopRatedMovies />
    </div>
  );
};

export default Browser;
