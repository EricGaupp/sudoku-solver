import React from "react";

//MobX
import { useObserver } from "mobx-react-lite";
import { useStore } from "../index";

//MaterialUI Components
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
} from "@material-ui/core";

//Components
import PuzzleBoard from "./PuzzleBoard";

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Types
import { SudokuGrid } from "../types/SudokuTypes";

const Solutions: React.FC = () => {
  const { puzzleStore } = useStore();
  return useObserver(() => (
    <>
      {puzzleStore.solutions.map((solution: SudokuGrid, index: number) => (
        <Grid item key={index} xs>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`solution${index}`}
              id={`solution${index}-header`}
            >
              <Typography>{`Solution ${index + 1}`}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <PuzzleBoard
                gameState={solution}
                render={({ value }) => (
                  <Typography variant="h4">{value}</Typography>
                )}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      ))}
    </>
  ));
};

export default Solutions;
