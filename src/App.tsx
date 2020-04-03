import React from "react";

//MaterialUI Components
import { CssBaseline } from "@material-ui/core";

//Components
import Puzzle from "./Puzzle";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Puzzle />
    </>
  );
};

export default App;
