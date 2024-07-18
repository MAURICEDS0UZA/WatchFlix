import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Browser from "./components/Browser";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route
            index
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/Browser"
            element={
              <>
                <Browser />
              </>
            }
          />
        </Route>
      </>
    )
  );
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
