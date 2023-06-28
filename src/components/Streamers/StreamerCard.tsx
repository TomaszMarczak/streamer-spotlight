import {
  Avatar,
  Box,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import { Streamer } from "@prisma/client";
import { Upvote } from "../Voting/Upvote";
import { Downvote } from "../Voting/Downvote";
import { VotingWrapper } from "../Voting/VotingWrapper";

interface StreamerCardProps {
  streamer: Streamer;
}

export const StreamerCard = (props: StreamerCardProps) => {
  const { streamer } = props;

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
        mb: 1,
        borderRadius: 2,
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={1}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={"Streamer name"} src={streamer.image} />

          <Typography
            variant="h6"
            component={Link}
            href={`/streamer/${streamer.id}`}
            sx={{ ml: 2, textDecoration: "none", color: "inherit" }}
          >
            {streamer.name}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Typography variant="body1" component="div">
            {streamer.platform}
          </Typography>
        </Box>
        <VotingWrapper>
          <Upvote count={streamer.upvotes} streamerId={streamer.id} />
          <Downvote count={streamer.downvotes} streamerId={streamer.id} />
        </VotingWrapper>
      </Grid>
    </Paper>
  );
};
