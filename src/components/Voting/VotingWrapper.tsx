import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

export const VotingWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      {children}
    </Box>
  );
};
