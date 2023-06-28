import { Container, Typography } from "@mui/material";
import { ThemeSwitch } from "./ThemeSwitch";

interface TopBarWrapperProps {
  mode: string;
  setMode: (mode: string) => void;
}

export const TopBarWrapper = (props: TopBarWrapperProps) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        mt: 2,

        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ ml: 2, textTransform: "uppercase" }}
      >
        Streamer spotlight app
      </Typography>
      <ThemeSwitch {...props} />
    </Container>
  );
};
