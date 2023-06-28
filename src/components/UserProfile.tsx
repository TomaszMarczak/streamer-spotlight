import { Grid } from "@mui/material";
import { Section } from "./Section";

export const UserProfile = () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>Profile</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>Profile</div>
        </Grid>
      </Grid>
    </Section>
  );
};
