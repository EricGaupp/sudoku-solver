import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../storeSetup";

//MaterialUI Components
import { Button, Zoom } from "@material-ui/core";

const ClearButton: React.FC = () => {
  const { puzzleStore } = useStore();

  const handleClick = () => {
    puzzleStore.clearPuzzle();
  };

  return useObserver(() => (
    <Zoom in={puzzleStore.clearPuzzleEnabled}>
      <Button variant="outlined" onClick={handleClick}>
        Clear
      </Button>
    </Zoom>
  ));
};

export default ClearButton;
