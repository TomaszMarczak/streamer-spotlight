import { Avatar, Divider, Link, Paper, Typography } from "@mui/material";

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
        p: 2,
        mb: 1,
        borderRadius: 2,
        alignItems: "center",
      }}
    >
      <Avatar alt={"Streamer name"} src={streamer.image} />
      <Typography variant="h6" component="div" sx={{ ml: 2 }}>
        {streamer.name}
      </Typography>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Typography variant="body1" component="div">
        {streamer.platform}
      </Typography>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Link href={`/streamer/${streamer.id}`} sx={{ position: "relative" }}>
        <Typography variant="body1" component="div">
          Visit profile
        </Typography>
      </Link>
      <VotingWrapper>
        <Upvote count={streamer.upvotes} streamerId={streamer.id} />
        <Downvote count={streamer.downvotes} streamerId={streamer.id} />
      </VotingWrapper>
    </Paper>
  );
};
