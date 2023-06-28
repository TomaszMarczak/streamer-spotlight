import { Paper, Typography, PaperProps } from "@mui/material";

interface SectionProps extends PaperProps {
  title?: string;
}
const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
      {children}
    </Typography>
  );
};

export const Section = (props: SectionProps) => {
  return (
    <Paper
      elevation={24}
      sx={{
        p: 2,
        mt: 2,
        mb: 4,
        borderRadius: 2,
        boxShadow: 24,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <SectionTitle>{props.title}</SectionTitle>
      {props.children}
    </Paper>
  );
};
