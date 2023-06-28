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
      <ThemeSwitch {...props} />
    </Container>
  );
};
