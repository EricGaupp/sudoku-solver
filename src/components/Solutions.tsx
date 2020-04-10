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
import PuzzleBoard from "./Puzzle";

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Types
import { SudokuGrid } from "../types/SudokuTypes";

const Solutions: React.FC = () => {
  const { puzzleStore } = useStore();
  return useObserver(() => (
    <>
      <Grid item>
        <Typography variant="subtitle1">{`Number of Solutions: ${puzzleStore.numSolutions}`}</Typography>
      </Grid>
      <Grid
        item
        xs={11}
        md={9}
        lg={6}
        container
        // alignItems="center"
        direction="column"
      >
        {puzzleStore.solutions.map((solution: SudokuGrid, index: number) => (
          <Grid item key={index} xs={12}>
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
      </Grid>
    </>
  ));
};

export default Solutions;
