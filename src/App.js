import ReactDOM from "react-dom";
import { lazy, StrictMode, Suspense, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0 w-full min-h-screen"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Suspense fallback={<h2>loading route ...</h2>}>
          <Router>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 to-red-500">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
