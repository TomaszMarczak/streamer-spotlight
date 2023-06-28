import { Box } from "@mui/material";
import { ReactNode } from "react";

export const VotingWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ display: "flex", ml: "auto", zIndex: 300, gap: 1 }}>
      {children}
    </Box>
  );
};
