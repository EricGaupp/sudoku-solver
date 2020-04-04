import { useState } from "react";

//MaterialUI
import { PaletteType, ThemeOptions } from "@material-ui/core";

//Theme
import { defaultTheme } from "../themes/defaultTheme";

export const useDarkMode = (): [ThemeOptions, () => void] => {
  const [theme, setTheme] = useState(defaultTheme);

  const type = theme.palette?.type;

  const toggleDarkMode = () => {
    const updatedThemeOptions = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : ("light" as PaletteType)
      }
    };
    setTheme(updatedThemeOptions);
  };

  return [theme, toggleDarkMode];
};
