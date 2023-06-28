import { Paper, useTheme } from "@mui/material";

export const Section = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={24}
      sx={{
        p: 2,
        m: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {children}
    </Paper>
  );
};
