import { Avatar, Grid } from "@mui/material";
import { Section } from "./Section";
import { Streamer } from "@prisma/client";

interface StreamerProfileProps {
  streamer: Streamer;
}
export const StreamerProfile = ({ streamer }: StreamerProfileProps) => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Avatar alt={streamer.name} src={streamer.image} />
        </Grid>
        <Grid item xs={12} md={6}>
          {streamer.name}
        </Grid>
      </Grid>
    </Section>
  );
};
