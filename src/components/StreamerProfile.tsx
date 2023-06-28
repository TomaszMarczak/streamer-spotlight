import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Section } from "./Section";
import { Streamer } from "@prisma/client";
import { SectionTitle } from "./Text";
import { Downvote } from "./Voting/Downvote";
import { Upvote } from "./Voting/Upvote";

interface StreamerProfileProps {
  streamer: Streamer;
}
export const StreamerProfile = ({ streamer }: StreamerProfileProps) => {
  return (
    <>
      <Section>
        <SectionTitle>Profile</SectionTitle>
        <Grid container spacing={2} sx={{ px: 4 }}>
          <Grid item xs={12} sm={6}>
            <Avatar src={streamer.image} sx={{ width: 250, height: 250 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">{streamer.name}</Typography>
            <Typography variant="h6">{streamer.platform}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Description
            </Typography>
            <Typography variant="body1">{streamer.description}</Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};
