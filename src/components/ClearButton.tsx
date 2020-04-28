import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../storeSetup";

//MaterialUI Components
import { Button } from "@material-ui/core";

const ClearButton: React.FC = () => {
  const { puzzleStore } = useStore();

  const handleClick = () => {
    puzzleStore.clearPuzzle();
  };

  return useObserver(() => (
    <Button variant="outlined" onClick={handleClick}>
      Clear
    </Button>
  ));
};

export default ClearButton;
