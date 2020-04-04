import React from "react";
import { useStore } from "../index";

//MaterialUI Components
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";

//Material Icons
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const SettingsFab: React.FC = () => {
  const { uiStore } = useStore();
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
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
    </>
  );
};

export default SettingsFab;
