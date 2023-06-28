import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Section } from "../Section";
import { Streamer } from "@prisma/client";

interface StreamerProfileProps {
  streamer: Streamer;
}
export const StreamerProfile = ({ streamer }: StreamerProfileProps) => {
  return (
    <>
      <Section title="Streamers profile">
        <Grid container spacing={4} sx={{ px: 4 }}>
          <Grid item xs={12} sm={6}>
            <Avatar
              src={streamer.image}
              sx={{
                height: "100%",
                width: "100%",
                maxWidth: "250px",
                maxHeight: "250px",
                margin: "auto",
                boxShadow: 12,
                aspectRatio: 1 / 1,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} margin="auto" textAlign="center">
            <Typography variant="h3">{streamer.name}</Typography>
            <Typography variant="body1">{streamer.platform}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Description</Typography>
            <Typography variant="body1">{streamer.description}</Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};
