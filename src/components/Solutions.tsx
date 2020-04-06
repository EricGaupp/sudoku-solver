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
  Typography
} from "@material-ui/core";

//Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Types
import { SudokuGrid } from "../types/SudokuTypes";

const Solutions: React.FC = () => {
  const { puzzleStore } = useStore();
  return useObserver(() => (
    <Grid item container alignItems="center" direction="column">
      <Grid item>
        <Typography variant="subtitle1">{`Number of Solutions: ${puzzleStore.numSolutions}`}</Typography>
      </Grid>
      <Grid item>
        {puzzleStore.solutions.map((solution: SudokuGrid, index: number) => (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`solution${index}`}
              id={`solution${index}-header`}
            >
              <Typography>{`Solution ${index + 1}`}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Grid>
    </Grid>
  ));
};

export default Solutions;
