import { Paper, Typography, useTheme } from "@mui/material";

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

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
      {children}
    </Typography>
  );
};
