import { Box, Switch } from "@mui/material";
import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeSwitchProps {
  mode: string;
  setMode: (mode: string) => void;
}

export const ThemeSwitch = ({ mode, setMode }: ThemeSwitchProps) => {
  const handleSwitch = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <Box sx={{ ml: "auto", mr: 2, display: "flex", alignItems: "center" }}>
      <FaSun size={20} />
      <Switch
        checked={mode === "dark"}
        onChange={handleSwitch}
        title="Toggle light/dark theme"
      />
      <FaMoon size={20} />
    </Box>
  );
};
