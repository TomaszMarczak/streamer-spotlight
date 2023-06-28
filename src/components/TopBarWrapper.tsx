import { Box } from "@mui/material";
import { ThemeSwitch } from "./ThemeSwitch";
import { Breadcrumbs } from "./Breadcrumbs";

interface TopBarWrapperProps {
  mode: string;
  setMode: (mode: string) => void;
}

export const TopBarWrapper = (props: TopBarWrapperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,

        alignItems: "center",
      }}
    >
      <Breadcrumbs />
      <ThemeSwitch {...props} />
    </Box>
  );
};
