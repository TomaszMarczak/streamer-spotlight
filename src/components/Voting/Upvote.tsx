import { FaHandPeace } from "react-icons/fa";
import { Badge, Box, ButtonBase, Tooltip } from "@mui/material";
import { useStreamers } from "@/context/streamers.context";

export interface VoteProps {
  streamerId: string;
  count: number;
}

export const Upvote = ({ count, streamerId }: VoteProps) => {
  const { sendVote, voting } = useStreamers();

  const handleVote = () => {
    if (voting) return;
    sendVote(streamerId, "up");
  };
  return (
    <Badge
      badgeContent={count}
      color="primary"
      max={999}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Tooltip title="Love it" arrow>
        <ButtonBase
          onClick={handleVote}
          sx={{
            borderRadius: "50%",
            width: 40,
            height: 40,
            backgroundColor: "success.main",
            color: "white",
            zIndex: 350,
            "&:hover": {
              backgroundColor: "success.dark",
              boxShadow: 2,
            },
          }}
        >
          <FaHandPeace size={20} />
        </ButtonBase>
      </Tooltip>
    </Badge>
  );
};
