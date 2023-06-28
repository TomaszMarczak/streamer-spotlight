import { Typography } from "@mui/material";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
      {children}
    </Typography>
  );
};
