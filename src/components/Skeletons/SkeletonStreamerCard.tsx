import { Divider, Paper, Skeleton } from "@mui/material";
import { VotingWrapper } from "../Voting/VotingWrapper";

export const SkeletonStreamerCard = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        p: 2,
        mb: 2,
        alignItems: "center",
      }}
    >
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width={100} height={40} sx={{ ml: 2 }} />
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Skeleton variant="text" width={100} height={40} />
      <VotingWrapper>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </VotingWrapper>
    </Paper>
  );
};
