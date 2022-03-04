import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from './config/config';
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const pageSize = 7;

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar color="#005abb" height={3} progress={progress} />
        <Routes>
          {
            router.map(path =>
              <Route
                exact
                path={path.path}
                element={
                  <News
                    setProgress={setProgress}
                    key={path.key}
                    category={path.category}
                    pageSize={pageSize}
                    country={path.country}
                  />
                }
              />
            )
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
