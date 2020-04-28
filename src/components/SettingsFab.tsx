import React from "react";
import { useStore } from "../storeSetup";

//MaterialUI Components
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Fab, useScrollTrigger, Zoom } from "@material-ui/core";

//Material Icons
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const SettingsFab: React.FC = () => {
  const { uiStore } = useStore();
  const classes = useStyles();
  const theme = useTheme();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  return (
    <Zoom in={!trigger}>
      <Fab
        aria-label="Settings"
        aria-controls="settings-menu"
        className={classes.fab}
        onClick={() => uiStore.toggleDarkMode()}
      >
        {theme.palette.type === "dark" ? (
          <BrightnessHighIcon />
        ) : (
          <Brightness3Icon />
        )}
      </Fab>
    </Zoom>
  );
};

export default SettingsFab;
