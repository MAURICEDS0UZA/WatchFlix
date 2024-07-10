import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Login />
      </Provider>
    </>
  );
}

export default App;
