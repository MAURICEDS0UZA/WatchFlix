import UseNowPlayingMovies from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
//** */ i have rename file from mainContainer -Maincontainer
const Browser = () => {
  UseNowPlayingMovies();
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default Browser;
